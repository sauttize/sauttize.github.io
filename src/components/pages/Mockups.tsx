import '../styles/Contents.css'
import SideBar from "../SideBar";
import WhiteLine from '../WhiteLine';

function Mockups() {
    return (
        <>
            <SideBar currentPage='mockups'/>
            <div className="content">
                <h1>Mockups</h1>
                <WhiteLine/>
                <h2>WORK IN PROGRESS...</h2>
            </div>
        </>
    );
}

export default Mockups;