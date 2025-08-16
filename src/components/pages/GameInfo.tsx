import { Game } from "../../domain/Game";
import WhiteLine from "../WhiteLine";

interface GameInfoProps {
    game : Game;
    onBack : () => void;
    backLabel?: string;
}

function GameInfo({game, onBack, backLabel = 'games'} : GameInfoProps) {
  return (
    <div>
        <button onClick={onBack} className="text-[var(--color-extra-light-gray)] hover:text-[var(--color-text)]">
            {`<< Back to ${backLabel}`}
        </button>
        <div className="basic-info flex items-baseline gap-2 auto-column">
            <h1 className="hover:text-[var(--color-primary)]"><a href={game.getLink()} target="_blank">{game.getName()}</a></h1>
            <p className="text-[16px]">{'('}{game.getReleaseYear()}{')'}</p>
        </div>
        <p className="mb-2 mt-1 text-[17px]">{game.getDescription()}</p>
        <WhiteLine/>
        <div className="game-data flex gap-8 mb-2 mt-2 auto-column">
            <div className="g-col-1 flex flex-col gap-[1px]">
                <p><span className="font-bold">Genres: </span>
                {game.getGenres().map((genre, index) => (
                    <span key={index}>
                        {genre}{index < game.getGenres().length - 1 ? ', ' : ''}
                    </span>
                ))}</p>
                <p><span className="font-bold">Keywords: </span>{game.getKeywords().map((keyword, index) => (
                    <span key={index}>
                        {keyword}{index < game.getKeywords().length - 1 ? ', ' : ''}
                    </span>
                ))}</p>
                <p><a href={game.getLink()} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)]">Game page!</a></p>
            </div>
            <div className="g-col-2 flex flex-col gap-[1px]">
                {Object.entries(game.getTeam()).map(([role, member], index) => (
                    <p key={index}><span className="font-bold">{role}: </span>{member}</p>
                ))}
            </div>
        </div>
        <WhiteLine />
        <div className="screenshots mt-4 flex flex-col gap-4 items-center">
            {game.getScreenshots().map((screenshot, index) => (
                <img key={index} src={screenshot} alt={`Screenshot ${index}`} className="h-full w-full" />
            ))}
        </div>
    </div>
  );
}

export default GameInfo;