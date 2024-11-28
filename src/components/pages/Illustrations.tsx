import '../styles/Contents.css'
import '../styles/Illustrations.css'

import WhiteLine from '../WhiteLine';
import ImageCard from '../ImageCard';

import Landscape from "/illustrations/landscape.jpeg";
import ManBack from '/illustrations/ig_1.jpg';
import ComicStyle from '/illustrations/comicStyle.png';
import HarleyIvy from '/illustrations/HarleyandIvy.jpg';

function Illustrations() {
    return (
        <>
            <div className="ordered-content">
                {/* translate-x-32 */}
                <h1>Illustrations</h1>
                <h2>i draw from time to time, here are some of my favorite pieces</h2>
                <WhiteLine/>
                <h2>WORK IN PROGRESS...</h2>
                <div className="ill-container">
                    <div className="img1"><ImageCard image={Landscape}/></div>
                    <div className="img3"><ImageCard image={HarleyIvy} /></div>
                    <div className="img4"><ImageCard image={ComicStyle} /></div>
                    <div className="img2"><ImageCard image={ManBack} /></div>
                </div>
            </div>
        </>
    );
}

export default Illustrations;