import ImageModal from "./ImageModal";
import { useState } from "react";

interface ImageCardProps {
    image: string;
}

function ImageCard({image}: ImageCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <a onClick={() => setIsModalOpen(true)} style={{ cursor: "pointer" }}>
                <img src={image} />
            </a>
            {isModalOpen && (
                <ImageModal image={image} onClose={() => setIsModalOpen(false)} />
            )}
        </div>
    );
}

export default ImageCard;