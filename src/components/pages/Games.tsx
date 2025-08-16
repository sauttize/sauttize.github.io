import '../styles/Contents.css'
import WhiteLine from '../WhiteLine';

import { useState } from 'react';

import { Game } from '../../domain/Game';
import { GameList } from '../../data/GameList';
import GameCard from '../GameCard';
import GameInfo from './GameInfo';

function Games() {
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);

    const handleGameClick = (game: Game) => {
        setSelectedGame(game);
    };    

    return (
        <div className="ordered-content">
            {selectedGame ? (
                <GameInfo game={selectedGame} onBack={() => setSelectedGame(null)} />
            ) : (
                <>
                    <div className="w-full flex flex-col justify-items-center">
                        <h1>Games</h1>
                        <h2>some of the games i've made</h2>
                    </div>
                    <WhiteLine/>
                    <div className="games pt-2 flex auto-f-center">
                        {GameList.map((game) => (
                            <GameCard game={game} key={game.getName()} onClick={() => handleGameClick(game)} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Games;