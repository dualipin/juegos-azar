import { useRef, useEffect } from "react";

interface DiceDisplayProps {
  value: number;
  index: number;
  isAnimating?: boolean;
  showResult?: boolean;
}

// ── Dot grid: 3×3 boolean array (row-major). true = visible pip ──
const F = false;
const T = true;

const FACE_GRIDS: Record<number, boolean[]> = {
  1: [F, F, F, F, T, F, F, F, F],

  2: [F, F, T, F, F, F, T, F, F],

  3: [F, F, T, F, T, F, T, F, F],

  4: [T, F, T, F, F, F, T, F, T],

  5: [T, F, T, F, T, F, T, F, T],

  6: [T, F, T, T, F, T, T, F, T],
};

// ── Which scene rotation (degrees) puts each face toward the camera ──
//   Face layout on the cube:
//     Front = 1 | Back  = 6
//     Right = 2 | Left  = 5
//     Top   = 3 | Bottom= 4
const FACE_ROTATIONS: Record<number, { x: number; y: number }> = {
  1: { x: 0, y: 0 }, // front  → no rotation needed
  2: { x: 0, y: -90 }, // right  → rotate scene -90° Y
  3: { x: -90, y: 0 }, // top    → rotate scene -90° X
  4: { x: 90, y: 0 }, // bottom → rotate scene +90° X
  5: { x: 0, y: 90 }, // left   → rotate scene +90° Y
  6: { x: 0, y: 180 }, // back   → rotate scene 180° Y
};

// ── All 6 faces of the physical die ──
const CUBE_FACES: { faceValue: number; cls: string }[] = [
  { faceValue: 1, cls: "dice-face--front" },
  { faceValue: 6, cls: "dice-face--back" },
  { faceValue: 2, cls: "dice-face--right" },
  { faceValue: 5, cls: "dice-face--left" },
  { faceValue: 3, cls: "dice-face--top" },
  { faceValue: 4, cls: "dice-face--bottom" },
];

/**
 * Returns the equivalent angle delta clamped to (-180, +180].
 * This lets us rotate the shortest angular distance to the target.
 */
function normAngle(delta: number): number {
  const mod = ((delta % 360) + 360) % 360;
  return mod > 180 ? mod - 360 : mod;
}

// ── Single die face with its pip grid ──
function DiceFace({ faceValue, cls }: { faceValue: number; cls: string }) {
  const grid = FACE_GRIDS[faceValue] ?? FACE_GRIDS[1];
  return (
    <div className={`dice-face ${cls}`}>
      {grid.map((hasPip, i) =>
        hasPip ? <div key={i} className="dice-pip" /> : <div key={i} />,
      )}
    </div>
  );
}

// ── Main component ──
export default function DiceDisplay({
  value,
  index,
  showResult = false,
}: DiceDisplayProps) {
  const cubeRef = useRef<HTMLDivElement>(null);
  const rotRef = useRef({ x: 0, y: 0, z: 0 });
  const rafRef = useRef<number | null>(null);
  const rollingRef = useRef(true);

  // ── Start rolling immediately on mount ──
  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    rollingRef.current = true;

    // Random initial orientation so multiple dice look different
    const x0 = Math.random() * 360;
    const y0 = Math.random() * 360;
    const z0 = Math.random() * 360;
    rotRef.current = { x: x0, y: y0, z: z0 };

    // Random angular velocity – each die tumbles at a slightly different rate
    const sign = () => (Math.random() > 0.5 ? 1 : -1);
    const vx = sign() * (3.5 + Math.random() * 3.5); // deg / frame ≈ 210–420 °/s
    const vy = sign() * (5.0 + Math.random() * 5.0);
    const vz = sign() * (1.5 + Math.random() * 2.0);

    cube.style.transition = "none";
    cube.style.transform = `rotateX(${x0}deg) rotateY(${y0}deg) rotateZ(${z0}deg)`;

    const tick = () => {
      if (!rollingRef.current) return;

      rotRef.current.x += vx;
      rotRef.current.y += vy;
      rotRef.current.z += vz;

      if (cubeRef.current) {
        cubeRef.current.style.transform =
          `rotateX(${rotRef.current.x}deg)` +
          ` rotateY(${rotRef.current.y}deg)` +
          ` rotateZ(${rotRef.current.z}deg)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      rollingRef.current = false;
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []); // only runs on mount

  // ── Settle to the correct face when the result is revealed ──
  useEffect(() => {
    if (!showResult) return;

    // Stop the RAF loop
    rollingRef.current = false;
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    const cube = cubeRef.current;
    if (!cube) return;

    const target = FACE_ROTATIONS[value] ?? FACE_ROTATIONS[1];
    const { x: cx, y: cy, z: cz } = rotRef.current;

    // Rotate the shortest way to the target face
    const finalX = cx + normAngle(target.x - cx);
    const finalY = cy + normAngle(target.y - cy);
    const finalZ = cz + normAngle(0 - cz); // snap Z back to 0

    rotRef.current = { x: finalX, y: finalY, z: finalZ };

    // Spring-like settle: fast deceleration with a subtle overshoot
    cube.style.transition = "transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)";
    cube.style.transform =
      `rotateX(${finalX}deg)` +
      ` rotateY(${finalY}deg)` +
      ` rotateZ(${finalZ}deg)`;
  }, [showResult, value]);

  return (
    <div className="card p-4 text-center" style={{ overflow: "visible" }}>
      <div className="text-xs text-muted-foreground mb-3">Dado #{index}</div>

      {/* 3-D scene */}
      <div className="dice-scene">
        <div ref={cubeRef} className="dice-cube">
          {CUBE_FACES.map(({ faceValue, cls }) => (
            <DiceFace key={cls} faceValue={faceValue} cls={cls} />
          ))}
        </div>
      </div>

      {/* Numeric result shown after settling */}
      {showResult && (
        <div className="mt-3 text-lg font-bold text-primary">{value}</div>
      )}
    </div>
  );
}
