import { useState } from "react";
import { GameRandomizers } from "../../../utils/randomGenerators";
import { DiceResult } from "../../../types";
import DiceDisplay from "./DiceDisplay";
import { Gamepad, ChevronRight, Lock, Smile } from "lucide-react";

const DadosGame = () => {
  const [diceCount, setDiceCount] = useState<number>(1);
  const [results, setResults] = useState<DiceResult[]>([]);
  const [error, setError] = useState<string>("");
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);

  const rollDice = async () => {
    if (diceCount < 1 || diceCount > 10) {
      setError("Ingresa un número entre 1 y 10");
      return;
    }

    setError("");
    setIsRolling(true);
    setShowResults(false);

    // Contador dramático durante la animación
    for (let i = 3; i > 0; i--) {
      setCountdown(i);
      await new Promise((resolve) => setTimeout(resolve, 700));
    }
    setCountdown(0);

    // Pausa dramática antes de mostrar resultados
    await new Promise((resolve) => setTimeout(resolve, 300));

    const diceValues = GameRandomizers.rollDice(diceCount);
    const newResults: DiceResult[] = diceValues.map((value, i) => ({
      value,
      timestamp: Date.now() + i,
      id: `dice-${Date.now()}-${i}`,
    }));

    setResults(newResults);
    setIsRolling(false);

    // Mostrar resultados con animación escalonada
    setTimeout(() => {
      setShowResults(true);
    }, 600);
  };

  const clearResults = () => {
    setResults([]);
    setError("");
    setShowResults(false);
  };

  return (
    <div>
      <div className="card shadow-sm">
        <div className="card-body text-center">
          <h1 className="card-title">
            <Smile className="inline-block mr-2" />
            Generador de Dados
          </h1>
          <p className="opacity-60">
            Números verdaderamente aleatorios con animaciones espectaculares
          </p>
        </div>
      </div>

      <div className="lg:flex lg:space-x-6">
        {/* Panel de control */}
        <section className="card lg:w-1/3">
          <div className="card-body">
            <h2 className="card-title text-center">
              <Gamepad className="inline-block mr-2" />
              Configuración
            </h2>

            <div className="space-y-4 mt-4">
              <div className="form-control">
                <label htmlFor="diceCount" className="label">
                  <span className="label-text">Cantidad de dados (1-10):</span>
                </label>
                <input
                  id="diceCount"
                  type="number"
                  min="1"
                  max="10"
                  value={diceCount}
                  onChange={(e) => setDiceCount(parseInt(e.target.value) || 1)}
                  className="input input-bordered w-full"
                  placeholder="Dados a generar"
                />
              </div>

              {error && (
                <div className="alert alert-error shadow-lg">
                  <div>{error}</div>
                </div>
              )}

              <div className="flex flex-col gap-2 mt-2">
                <button
                  onClick={rollDice}
                  disabled={isRolling}
                  className={`btn btn-primary w-full ${isRolling ? "loading" : ""}`}
                >
                  {isRolling ? (
                    countdown > 0 ? (
                      <>
                        <ChevronRight className="inline-block mr-2" />
                        {countdown}...
                        <ChevronRight className="inline-block ml-2" />
                      </>
                    ) : (
                      <>
                        <ChevronRight className="inline-block mr-2" />
                        ¡Rodando!
                        <ChevronRight className="inline-block ml-2" />
                      </>
                    )
                  ) : (
                    <>
                      <ChevronRight className="inline-block mr-2" />
                      Tirar Dados
                    </>
                  )}
                </button>

                {results.length > 0 && (
                  <button
                    onClick={clearResults}
                    className="btn btn-outline w-full"
                  >
                    <ChevronRight className="inline-block mr-2" />
                    Limpiar
                  </button>
                )}
              </div>

              <div className="mt-6">
                <div className="alert alert-info shadow-lg">
                  <div>
                    <div className="font-bold">
                      <Lock className="inline-block mr-2" />
                      Números Verdaderamente Aleatorios
                    </div>
                    <div className="text-sm">
                      Utiliza la Web Crypto API del navegador para generar
                      números criptográficamente seguros y verdaderamente
                      aleatorios.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Área de resultados */}
        <section className="card lg:w-2/3">
          <div className="card-body">
            <h2 className="card-title">
              <Gamepad className="inline-block mr-2" />
              Resultados
            </h2>

            {isRolling && countdown > 0 && (
              <div className="card bg-primary text-primary-content mb-4">
                <div className="card-body text-center">
                  <div className="text-6xl font-bold">{countdown}</div>
                  <p>¡Preparando los dados!</p>
                </div>
              </div>
            )}

            {results.length === 0 && !isRolling ? (
              <div className="card">
                <div className="card-body text-center">
                  <div className="text-4xl mb-4">
                    <Smile className="inline-block" />
                  </div>
                  <p>
                    Configura la cantidad de dados y presiona "Tirar Dados" para
                    comenzar
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  {results.map((result, index) => (
                    <div
                      key={result.id}
                      className={showResults ? "animate-bounce-in" : ""}
                      style={{
                        animationDelay: showResults
                          ? `${index * 150}ms`
                          : "0ms",
                      }}
                    >
                      <DiceDisplay
                        value={result.value}
                        index={index + 1}
                        isAnimating={isRolling}
                        showResult={showResults}
                      />
                    </div>
                  ))}
                </div>

                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-value">{results.length}</div>
                    <div className="stat-desc">Total dados</div>
                  </div>

                  <div className="stat">
                    <div className="stat-value">
                      {results.reduce((sum, r) => sum + r.value, 0)}
                    </div>
                    <div className="stat-desc">Suma total</div>
                  </div>

                  <div className="stat">
                    <div className="stat-value">
                      {(
                        results.reduce((sum, r) => sum + r.value, 0) /
                        results.length
                      ).toFixed(2)}
                    </div>
                    <div className="stat-desc">Promedio</div>
                  </div>

                  <div className="stat">
                    <div className="stat-value">
                      {Math.max(...results.map((r) => r.value))}
                    </div>
                    <div className="stat-desc">Máximo</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DadosGame;
