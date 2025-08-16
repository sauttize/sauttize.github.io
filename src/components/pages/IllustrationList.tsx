import ImageCard from '../ImageCard';

import Landscape from "/illustrations/landscape.webp";
import ManBack from '/illustrations/ig_1.webp';
import ComicStyle from '/illustrations/comicStyle.webp';
import HarleyIvy from '/illustrations/HarleyandIvy.webp';
import BlackMamba from '/illustrations/blackmamba_image.webp';
import EmioAmiibo from '/illustrations/emio_amiibo.webp';

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

interface IllustrationListProps {
    showAll?: boolean;
}

function IllustrationList({ showAll = true }: IllustrationListProps){
    return (
        <>
            {!showAll &&
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                    <Masonry gutter='10px'>
                        <ImageCard image={Landscape}/>
                        <ImageCard image={HarleyIvy} />
                        <ImageCard image={ComicStyle} />
                    </Masonry>
                </ResponsiveMasonry>}
            {showAll &&
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                    <Masonry gutter='10px'>
                        <ImageCard image={Landscape}/>
                        <ImageCard image={HarleyIvy} />
                        <ImageCard image={ComicStyle} />
                        <ImageCard image={ManBack}/>
                        <ImageCard image={BlackMamba} />
                        <ImageCard image={EmioAmiibo} />
                    </Masonry>
                </ResponsiveMasonry>}
        </>
    );
}

export default IllustrationList;