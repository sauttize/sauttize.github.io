import '../styles/Contents.css'
import WhiteLine from '../WhiteLine';

import { GameList } from '../../data/GameList';
import GameCard from '../GameCard';

function Games() {
    return (
        <>
            <div className="ordered-content">
                <div className="w-full flex flex-col justify-items-center">
                    <h1>Games</h1>
                    <h2>yes, all of them were for jams. 
                    Making games isn't easy...</h2>
                </div>
                <WhiteLine/>
                <div className="games pt-2">
                    {GameList.map((game) => (
                        <GameCard game={game} key={game.getName()}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Games;