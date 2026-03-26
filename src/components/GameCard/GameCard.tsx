import { Link } from "react-router";

interface GameCardProps {
  title: string;
  method: string;
  description: string;
  image: string;
  path: string;
}

interface GameCardProps {
  title: string;
  method: string;
  description: string;
  image: string;
  path: string;
  index?: number;
}

const GameCard = ({
  title,
  method,
  description,
  image,
  path,
  index = 0,
}: GameCardProps) => {
  return (
    <article
      className="group hover-lift transition-all duration-300 animate-slide-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <Link to={path}>
        <div className="card overflow-hidden h-full hover-glow">
          <div className="relative overflow-hidden">
            <img
              alt={title}
              src={image}
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              <div className="bg-white/90 dark:bg-black/90 backdrop-blur-xs rounded-full p-2">
                <svg
                  className="w-5 h-5 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 transition-all duration-300 group-hover:scale-105">
                {method}
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
              {title}
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3 transition-colors duration-300 group-hover:text-card-foreground">
              {description}
            </p>

            <div className="mt-4 flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium transition-all duration-300 group-hover:gap-2">
              Jugar ahora
              <svg
                className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default GameCard;
