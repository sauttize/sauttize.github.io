interface ImageCardProps {
    image: string;
}

function ImageCard({image}: ImageCardProps) {
    return (
        <div className="overflow-hidden h-full w-full">
            <a href={image}><img src={image} /></a>
        </div>
    );
}

export default ImageCard;