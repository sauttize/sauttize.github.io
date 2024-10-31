import '../styles/Contents.css'
import '../styles/Illustrations.css'

import SideBar from "../SideBar";
import WhiteLine from '../WhiteLine';

//import Landscape from "/illustrations/landscape.jpeg";
//import ManBack from '/illustrations/ig_1.jpg';
//import ComicStyle from '/illustrations/comicStyle.png';
//import HarleyIvy from '/illustrations/HarleyandIvy.jpg';

function Illustrations() {
    return (
        <>
            <SideBar currentPage='illustrations'/>
            <div className="content">
                {/* translate-x-32 */}
                <h1>Illustrations</h1>
                <h2>i draw from time to time, here are some of my favorite pieces</h2>
                <WhiteLine/>
                <h2>WORK IN PROGRESS...</h2>
                <div className="ill-container">
                    {/* 
                    <img src={Landscape} alt="Placeholder" className="ill"/>
                    <img src={ComicStyle} alt="Placeholder" className="ill"/>
                    <img src="https://es.mypet.com/wp-content/uploads/sites/23/2021/03/GettyImages-623368750-e1582816063521-1.jpg" alt="Placeholder" className="ill"/>
                    <img src="https://es.mypet.com/wp-content/uploads/sites/23/2021/03/GettyImages-623368750-e1582816063521-1.jpg" alt="Placeholder" className="ill"/>
                    <img src="https://es.mypet.com/wp-content/uploads/sites/23/2021/03/GettyImages-623368750-e1582816063521-1.jpg" alt="Placeholder" className="ill"/>
                    <img src={HarleyIvy} alt="Placeholder" className="ill"/>
                    <img src="https://es.mypet.com/wp-content/uploads/sites/23/2021/03/GettyImages-623368750-e1582816063521-1.jpg" alt="Placeholder" className="ill"/>
                    <img src="https://es.mypet.com/wp-content/uploads/sites/23/2021/03/GettyImages-623368750-e1582816063521-1.jpg" alt="Placeholder" className="ill"/>
                    <img src={ManBack} alt="Placeholder" className="ill"/>
                    */}
                </div>
            </div>
        </>
    );
}

export default Illustrations;