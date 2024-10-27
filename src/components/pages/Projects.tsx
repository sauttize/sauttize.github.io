import '../styles/Contents.css'
import SideBar from "../SideBar";
import WhiteLine from '../WhiteLine';

function Projects() {
    return (
        <>
            <SideBar currentPage='projects'/>
            <div className="content">
                <h1>Projects</h1>
                <WhiteLine/>
                <h2>WORK IN PROGRESS...</h2>
            </div>
        </>
    );
}

export default Projects;