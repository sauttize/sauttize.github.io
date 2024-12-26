interface ImageCardProps {
    image: string;
}

function ImageCard({image}: ImageCardProps) {
    return (
        <div>
            <a href={image}><img src={image} /></a>
        </div>
    );
}

export default ImageCard;