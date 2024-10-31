import '../styles/Contents.css';
import '../styles/Skills.css';

import SideBar from "../SideBar";
import WhiteLine from '../WhiteLine';
import Star from '/starEmpty.svg';
import SkillButton from '../SkillButton';
import { useEffect, useState } from 'react';

import GodotUnselected from '/skill_icons/godot_unselected.svg';
import GodotSelected from '/skill_icons/godot_selected.svg';

interface SelectedButtonState {
    buttonId: string;
    stars: number;
}

function Skills() {
    const [selectedButton, setSelectedButton] = useState<SelectedButtonState | null>(null);

    const handleButtonClick = (buttonId: string, stars: number) => {
        setSelectedButton({ buttonId, stars });
    };

    useEffect(() => {
        handleButtonClick('godot', 7);
    }, []);

    return (
        <>
            <SideBar currentPage='skills'/>
            <div className="ordered-content">
                <h1>Skills</h1>
                <h2 className='translate-x-5'>Some of the technologies I’ve used include...</h2>
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
                    <SkillButton onSelect={handleButtonClick} buttonId='godot' selectedImage={GodotSelected} unselectedImage={GodotUnselected} starAmount={7}/>
                </div>
                <WhiteLine/>
                <p className='text-white'>used for:</p>
                {selectedButton?.buttonId === 'godot' && (
                <div className="selected-info text-white">
                    <p>{'[Godot projects]'}</p>
                </div> )
                }
            </div>
        </>
    );
}

export default Skills;