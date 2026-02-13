import '../styles/Contents.css';
import '../styles/Skills.css';

import WhiteLine from '../WhiteLine';
import Star from '/starEmpty.svg';
import SkillButton from '../SkillButton';
import { useEffect, useState } from 'react';

import GodotUnselected from '/skill_icons/godot_unselected.svg';
import GodotSelected from '/skill_icons/godot_selected.svg';
import { ProjectList } from '../../data/ProjectList';
import GameCard from '../GameCard';

import IllustrationUnselected from '/skill_icons/illustration_unselected.svg';
import IllustrationSelected from '/skill_icons/illustration_selected.svg';
import IllustrationList from './IllustrationList';

import BlenderUnselected from '/skill_icons/blender_unselected.svg';
import BlenderSelected from '/skill_icons/blender_selected.svg';
import { ModelPreview } from '../ModelPreview';
import { Pickaxe } from '../../models/Pickaxe';
import { Computer } from '../../models/Computer';
import { FlipPhone } from '../../models/FlipPhone';
import { GachaMachine } from '../../models/GachaMachine';
import { Potion } from '../../models/Potion';
import { SchoolSupplies } from '../../models/SchoolSupplies';
import { SchoolTable } from '../../models/SchoolTable';
import { Sword } from '../../models/Sword';
import { Table } from '../../models/Table';

import GameInfo from './GameInfo';
import { Game } from '../../domain/Game';

interface SelectedButtonState {
    buttonId: string;
    stars: number;
}

interface SkillsPageProps {
    onRedirectPage: (page : string) => void;
}

function Skills({ onRedirectPage }: SkillsPageProps) {
    const [selectedButton, setSelectedButton] = useState<SelectedButtonState | null>(null);
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);

    const handleButtonClick = (buttonId: string, stars: number) => {
        setSelectedButton({ buttonId, stars });
    };

    const handleGameClick = (game : Game) => {
        setSelectedGame(game);
    };

    // Initialize with Godot as the default selected button
    useEffect(() => {
        handleButtonClick('Godot', 7);
    }, []);

    return (
        <div className="ordered-content">
            {selectedGame ? (
                <GameInfo game={selectedGame} onBack={() => setSelectedGame(null)} backLabel='skills' />
            ) : (
                <>
                    <h1>Skills</h1>
                    <h2 className='translate-x-5'>Some of the technologies I’ve used or skills I possess include...</h2>
                    <WhiteLine/>
                    <div className="level-container">
                        <p className='skill-level-p'>SKILL LEVEL</p>
                        <div className="stars-container">
                            {Array.from({ length: 10 }, (_, index) => (
                                <img
                                    key={index}
                                    src={index < (selectedButton?.stars || 0) ? Star : Star}
                                    alt={index < (selectedButton?.stars || 0) ? "Full Star" : "Empty Star"}
                                    className={index < (selectedButton?.stars || 0) ? 'star-full' : 'star-empty'}
                                />
                            ))}
                        </div>
                    </div>
                    <WhiteLine/>
                    <div className="skills-carousel">
                        <SkillButton onSelect={handleButtonClick} buttonId='Godot' selectedImage={GodotSelected} unselectedImage={GodotUnselected} starAmount={7} selected={selectedButton?.buttonId === 'Godot'}/>
                        <SkillButton onSelect={handleButtonClick} buttonId='Illustration' selectedImage={IllustrationSelected} unselectedImage={IllustrationUnselected} starAmount={5} selected={selectedButton?.buttonId === 'Illustration'}/>
                        <SkillButton onSelect={handleButtonClick} buttonId='Blender' selectedImage={BlenderSelected} unselectedImage={BlenderUnselected} starAmount={4} selected={selectedButton?.buttonId === 'Blender'}/>
                    </div>
                    <WhiteLine/>
                    {selectedButton?.buttonId === 'Godot' && (<>
                        <p className='skill-name'>Godot</p>
                        <p className='text-white'>used for:</p>
                        <div className="selected-info text-white pt-2 flex auto-f-center">
                            {ProjectList.filter(project => project.tools.includes('Godot')).map(project => (
                                <GameCard key={project.getName()} game={project} onClick={() => handleGameClick(project)} />
                            ))}
                        </div>
                    </>)}

                    {selectedButton?.buttonId === 'Illustration' && (<>
                        <p className='skill-name'>Illustration</p>
                        <button className="flex text-[var(--color-primary)]" onClick={() => onRedirectPage('Illustrations')}>Check all illustrations!</button>
                        <IllustrationList showAll={false} />
                    </>)}

                    {selectedButton?.buttonId === 'Blender' && (<>
                        <p className='skill-name'>Blender</p>
                        <p className='text-white'>used for:</p>
                        <div className='selected-info pt-2 grid grid-cols-3 gap-6 justify-items-center items-center w-full h-[300px]'>
                            {/* Add 3d model of pickaxe here (/models/pickaxe.glb) */}
                            <ModelPreview>
                                <GachaMachine />
                            </ModelPreview>
                            <ModelPreview>
                                <Computer />
                            </ModelPreview>
                            <ModelPreview>
                                <Pickaxe />
                            </ModelPreview>
                            <ModelPreview>
                                <Sword />
                            </ModelPreview>
                            <ModelPreview>
                                <Potion />
                            </ModelPreview>
                            <ModelPreview>
                                <Table />
                            </ModelPreview>
                            <ModelPreview>
                                <SchoolSupplies />
                            </ModelPreview>
                            <ModelPreview>
                                <FlipPhone />
                            </ModelPreview>
                            <ModelPreview>
                                <SchoolTable />
                            </ModelPreview>
                        </div>
                    </>)}
                </>
            )}
        </div>
    );
}

export default Skills;