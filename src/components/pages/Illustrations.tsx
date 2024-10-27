import '../styles/Contents.css'
import SideBar from "../SideBar";
import WhiteLine from '../WhiteLine';

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
            </div>
        </>
    );
}

export default Illustrations;