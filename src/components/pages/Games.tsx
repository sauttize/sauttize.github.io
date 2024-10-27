import '../styles/Contents.css'
import SideBar from "../SideBar";
import WhiteLine from '../WhiteLine';

function Games() {
    return (
        <>
            <SideBar currentPage='games'/>
            <div className="content">
                <h1>Games</h1>
                <WhiteLine/>
                <h2>WORK IN PROGRESS...</h2>
            </div>
        </>
    );
}

export default Games;