import { useState } from 'react';

interface SkillIconProps {
    onSelect: (buttonId: string, stars: number) => void;
    buttonId: string;
    selectedImage: string;
    unselectedImage: string;
    starAmount: number;
}

function SkillButton({ onSelect, buttonId, selectedImage, unselectedImage, starAmount }: SkillIconProps) {
    const [selected, setSelected] = useState(buttonId === 'Godot' ? true : false);

    const handleClick = () => {
        setSelected(!selected);
        onSelect(selected ? '' : buttonId, selected ? 0 : starAmount);
    };

    return (
        <>
            <button className="skill-icon" onClick={handleClick}>
                {selected ? (
                    <img src={selectedImage} alt={`${buttonId} Selected`} />
                ) : (
                    <img src={unselectedImage} alt={`${buttonId} Unselected`} />
                )}
            </button>
        </>
    );
}

export default SkillButton;