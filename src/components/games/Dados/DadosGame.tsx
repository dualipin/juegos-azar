import { useState } from "react";
import { GameRandomizers } from "../../../utils/randomGenerators";
import { DiceResult } from "../../../types";
import DiceDisplay from "./DiceDisplay";

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
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gradient mb-2">
          🎲 Generador de Dados
        </h1>
        <p className="text-muted-foreground">
          Números verdaderamente aleatorios con animaciones espectaculares
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Panel de control */}
        <section className="lg:basis-1/3 card p-6">
          <h2 className="text-xl font-bold text-center mb-6 text-card-foreground">
            ⚙️ Configuración
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="diceCount"
                className="block text-sm font-medium mb-2"
              >
                Cantidad de dados (1-10):
              </label>
              <input
                id="diceCount"
                type="number"
                min="1"
                max="10"
                value={diceCount}
                onChange={(e) => setDiceCount(parseInt(e.target.value) || 1)}
                className="input w-full"
                placeholder="Dados a generar"
              />
            </div>

            {error && (
              <p className="text-error-500 text-sm text-center bg-error-50 dark:bg-error-950 p-2 rounded-lg">
                {error}
              </p>
            )}

            <div className="space-y-2">
              <button
                onClick={rollDice}
                disabled={isRolling}
                className={`btn-primary w-full py-3 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed ${
                  isRolling ? "animate-pulse" : ""
                }`}
              >
                {isRolling
                  ? countdown > 0
                    ? `🎲 ${countdown}... 🎲`
                    : "🎲 ¡Rodando! 🎲"
                  : "🎯 Tirar Dados"}
              </button>

              {results.length > 0 && (
                <button onClick={clearResults} className="btn-secondary w-full">
                  🗑️ Limpiar
                </button>
              )}
            </div>
          </div>

          <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-950 rounded-xl border border-primary-200 dark:border-primary-800">
            <h3 className="font-semibold text-primary-700 dark:text-primary-300 mb-2">
              🔐 Números Verdaderamente Aleatorios
            </h3>
            <p className="text-sm text-primary-600 dark:text-primary-400">
              Utiliza la Web Crypto API del navegador para generar números
              criptográficamente seguros y verdaderamente aleatorios.
            </p>
          </div>
        </section>

        {/* Área de resultados */}
        <section className="lg:basis-2/3">
          <h2 className="text-2xl font-bold mb-6 text-card-foreground">
            🎯 Resultados
          </h2>

          {isRolling && countdown > 0 && (
            <div className="card p-8 text-center mb-6 bg-linear-to-br from-primary-500 to-accent-500 animate-slide-in-down">
              <div className="text-6xl font-bold text-white animate-heartbeat mb-2">
                {countdown}
              </div>
              <p className="text-white text-lg font-medium animate-wiggle">
                ¡Preparando los dados!
              </p>
            </div>
          )}

          {results.length === 0 && !isRolling ? (
            <div className="card p-8 text-center">
              <div className="text-4xl mb-4">🎲</div>
              <p className="text-muted-foreground">
                Configura la cantidad de dados y presiona "Tirar Dados" para
                comenzar
              </p>
            </div>
          ) : (
            <div className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {results.map((result, index) => (
                  <div
                    key={result.id}
                    className={showResults ? "animate-bounce-in" : ""}
                    style={{
                      animationDelay: showResults ? `${index * 150}ms` : "0ms",
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

              <div className="card p-6 animate-slide-in-up">
                <h3 className="font-semibold mb-4 text-card-foreground">
                  📊 Estadísticas
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div
                    className="text-center p-3 bg-success-50 dark:bg-success-950 rounded-lg hover-lift animate-fade-in"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <div className="text-2xl font-bold text-success-600 dark:text-success-400">
                      {results.length}
                    </div>
                    <div className="text-xs text-success-700 dark:text-success-300">
                      Total dados
                    </div>
                  </div>
                  <div
                    className="text-center p-3 bg-primary-50 dark:bg-primary-950 rounded-lg hover-lift animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      {results.reduce((sum, r) => sum + r.value, 0)}
                    </div>
                    <div className="text-xs text-primary-700 dark:text-primary-300">
                      Suma total
                    </div>
                  </div>
                  <div
                    className="text-center p-3 bg-accent-50 dark:bg-accent-950 rounded-lg hover-lift animate-fade-in"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <div className="text-2xl font-bold text-accent-600 dark:text-accent-400">
                      {(
                        results.reduce((sum, r) => sum + r.value, 0) /
                        results.length
                      ).toFixed(2)}
                    </div>
                    <div className="text-xs text-accent-700 dark:text-accent-300">
                      Promedio
                    </div>
                  </div>
                  <div
                    className="text-center p-3 bg-warning-50 dark:bg-warning-950 rounded-lg hover-lift animate-fade-in"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <div className="text-2xl font-bold text-warning-600 dark:text-warning-400">
                      {Math.max(...results.map((r) => r.value))}
                    </div>
                    <div className="text-xs text-warning-700 dark:text-warning-300">
                      Máximo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default DadosGame;
