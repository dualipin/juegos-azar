import {
  Cat,
  Code,
  Gamepad,
  Lock,
  Moon,
  PointerIcon,
  Power,
  Shuffle,
} from "lucide-react";
import logo from "../assets/icon.webp";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gradient mb-4">
          Acerca del Proyecto
        </h1>
        <p className="text-lg text-muted-foreground">
          Juegos de Azar reimaginados con tecnología criptográfica moderna
        </p>

        <img
          src={logo}
          alt="Juegos Azar"
          className="my-4 aspect-square w-100 sm:w-150 lg:w-175 rounded-full border-primary/20 mx-auto border-2 shadow shadow-primary"
        />
      </div>

      <div className="space-y-8">
        <section className="card p-6">
          <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
            Juegos Azar
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Una colección de juegos clásicos reimaginados con tecnología de
            vanguardia. Cada juego utiliza la Web Crypto API para generar
            números verdaderamente aleatorios, garantizando una experiencia de
            juego completamente justa y criptográficamente segura.
          </p>
        </section>

        <section className="card p-6">
          <h2 className="text-2xl font-semibold mb-4 text-card-foreground flex items-center gap-2">
            <Gamepad className="w-6 h-6" /> Juegos Incluidos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-primary-50 dark:bg-primary-950 rounded-lg">
              <h3 className="font-semibold text-primary-700 dark:text-primary-300 flex items-center gap-2">
                <Lock className="w-5 h-5 flex-shrink-0" /> Dados
              </h3>
              <p className="text-sm text-primary-600 dark:text-primary-400">
                Números criptográficamente seguros
              </p>
            </div>
            <div className="p-4 bg-success-50 dark:bg-success-950 rounded-lg">
              <h3 className="font-semibold text-success-700 dark:text-success-300 flex items-center gap-2">
                <Cat className="w-5 h-5 flex-shrink-0" /> Gato (Tic Tac Toe)
              </h3>
              <p className="text-sm text-success-600 dark:text-success-400">
                IA con aleatoriedad verdadera
              </p>
            </div>
            <div className="p-4 bg-accent-50 dark:bg-accent-950 rounded-lg">
              <h3 className="font-semibold text-accent-700 dark:text-accent-300 flex items-center gap-2">
                <Shuffle className="w-5 h-5 flex-shrink-0" /> Memorama
              </h3>
              <p className="text-sm text-accent-600 dark:text-accent-400">
                Mezcla criptográficamente segura
              </p>
            </div>
            <div className="p-4 bg-warning-50 dark:bg-warning-950 rounded-lg">
              <h3 className="font-semibold text-warning-700 dark:text-warning-300 flex items-center gap-2">
                <PointerIcon className="w-5 h-5 flex-shrink-0" /> Adivina el
                Número
              </h3>
              <p className="text-sm text-warning-600 dark:text-warning-400">
                Generación uniforme perfecta
              </p>
            </div>
          </div>
        </section>

        <section className="card p-6">
          <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
            Tecnologías Utilizadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-primary-600 dark:text-primary-400">
                Frontend Moderno
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  React 18 con TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-success-500 rounded-full"></span>
                  Vite para desarrollo ultrarrápido
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
                  Tailwind CSS con modo oscuro
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-warning-500 rounded-full"></span>
                  React Router para navegación SPA
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-success-600 dark:text-success-400">
                Características Avanzadas
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></span>
                  <Moon className="w-4 h-4 flex-shrink-0" /> Modo oscuro
                  automático
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-success-500 rounded-full flex-shrink-0"></span>
                  <Lock className="w-4 h-4 flex-shrink-0" /> Números
                  verdaderamente aleatorios
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0"></span>
                  <Shuffle className="w-4 h-4 flex-shrink-0" /> Paleta de
                  colores moderna
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-warning-500 rounded-full flex-shrink-0"></span>
                  <Power className="w-4 h-4 flex-shrink-0" /> Performance
                  optimizada
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-error-500 rounded-full flex-shrink-0"></span>
                  <PointerIcon className="w-4 h-4 flex-shrink-0" /> Diseño
                  completamente responsivo
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="card p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-card-foreground flex items-center justify-center gap-2">
            <Code className="w-6 h-6" /> Desarrollador
          </h2>
          <div className="flex flex-col items-center space-y-4">
            <img
              src="https://github.com/dualipin.png"
              alt="dualipin - Desarrollador"
              className="w-32 h-32 rounded-full border-4 border-primary-500 hover:scale-105 transition-transform shadow-lg"
            />
            <div>
              <h3 className="text-xl font-semibold text-card-foreground">
                dualipin
              </h3>
              <p className="text-muted-foreground">Desarrollador Full Stack</p>
            </div>
            <a
              href="https://github.com/dualipin/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-primary-500 to-accent-500 text-white rounded-full font-medium hover:scale-105 transition-transform"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Ver en GitHub
            </a>
          </div>
          <p className="text-muted-foreground leading-relaxed mt-6">
            Proyecto que demuestra la evolución hacia tecnologías modernas de
            aleatoriedad criptográfica en el desarrollo de software interactivo
            y educativo.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
