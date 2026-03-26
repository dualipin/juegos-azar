import { ChevronRight, Smile } from "lucide-react";
import { Link } from "react-router";

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
      className="group hover-lift transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <Link to={path} className="block h-full">
        <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
          <figure className="relative overflow-hidden h-48 shrink-0">
            <img
              alt={title}
              src={image}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              <div className="bg-base-100/90 backdrop-blur-sm rounded-full p-2">
                <Smile className="w-5 h-5 text-primary" />
              </div>
            </div>
          </figure>

          <div className="card-body gap-3">
            <div>
              <span className="badge p-1 badge-primary badge-soft text-xs transition-transform duration-300 group-hover:scale-105">
                {method}
              </span>
            </div>

            <h3 className="card-title text-base-content group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>

            <p className="text-sm leading-relaxed text-base-content/60 line-clamp-3 group-hover:text-base-content/80 transition-colors duration-300">
              {description}
            </p>

            <div className="card-actions justify-start mt-auto pt-1">
              <span className="btn btn-ghost btn-sm px-0 text-primary hover:bg-transparent">
                Jugar ahora
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default GameCard;
