import { Game } from "../domain/Game";
import WhiteLine from "./WhiteLine";

interface GameInfoProps {
    game : Game;
}

function GameInfo({game} : GameInfoProps) {
  return (
    <div>
        <div className="basic-info flex">
            <h1>{game.getName()}</h1>
            <p>{'('}{game.getReleaseYear()}{')'}</p>
        </div>
        <p>{game.getDescription()}</p>
        <WhiteLine/>
        <div className="game-data flex gap-6">
            <div className="g-col-1">
                <p><span className="font-bold">Genres: </span>{game.getGenres()}</p>
                <p><span className="font-bold">Keywords: </span>{game.getKeywords()}</p>
            </div>
            <div className="g-col-2">
                
            </div>
        </div>
    </div>
  );
}

export default GameInfo;