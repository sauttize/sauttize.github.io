import { Game } from "../domain/Game";

interface GameCardProps {
    game: Game;
    onClick: () => void;
}

function GameCard({ game, onClick }: GameCardProps) {
  return (
    <div onClick={onClick} className="w-[345px] h-[230px] shadow-md border-black border-2 border-opacity-20 flex items-end overflow-hidden relative">
        <button className="absolute inset-0 hover:bg-white hover:bg-opacity-5 z-20"></button>
        <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${game.getImage()})` }}
        ></div>

        <div className="w-full h-auto bg-black bg-opacity-50 p-2 m-2 z-10">
            <p className="gameName font-bold">{game.getName()} <span className="font-light">{'('}{game.getReleaseYear()}{')'}</span></p>
        </div>
    </div>
  );
}

export default GameCard;