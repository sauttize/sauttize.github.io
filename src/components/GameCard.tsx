import { Game } from "../domain/Game";

interface GameCardProps {
    game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <a href={game.getLink()} target="_blank" className="w-[345px] h-[230px] shadow-md flex items-end overflow-hidden relative">
        <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${game.getImage()})` }}
        ></div>

        <div className="w-full h-auto bg-black bg-opacity-50 p-2 m-2 z-10">
            <p className="gameName font-bold">{game.getName()} <span className="font-light">{'('}{game.getReleaseYear()}{')'}</span></p>
        </div>
    </a>
  );
}

export default GameCard;