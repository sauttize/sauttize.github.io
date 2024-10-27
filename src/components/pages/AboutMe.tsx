import '../styles/Contents.css'
import '../styles/AboutMe.css';

import ProfilePic from '/profilepic.webp';
import CatVector from '/catvector.svg';
import WhiteLine from '../WhiteLine';
import SideBar from '../SideBar';

function AboutMe() {
    return (
        <>
        <SideBar currentPage='aboutme'/>
        <div className='content'>
            <div className="intro-text">
                <div className="name-p">
                    <span>hi, I'm <span className='name'>Nicolas Tejera</span></span>
                </div>
                <div className="info-p">
                    <div className='info-p1'>I’m a computer science student</div> <br/>
                    <div className='info-p2'>i like videogames, ui design and making cool stuff <span className='cats-p'>also cats...</span></div>
                </div>
            </div>
            <WhiteLine/>
            <div className="profile-info">
                <div className="profile-pic">
                    <img src={ProfilePic} alt="Profile" className="masked-image" />
                </div>
                <div className="info-list">
                    <div className="column1">
                        <p className='list-p'><span className='list-p-bold'>Country: </span>Uruguay</p>
                        <p className='list-p'><span className='list-p-bold'>Status: </span>Open for work / freelancing</p>
                    </div>
                    <div className="column2">
                        <p className='list-p'><span className='list-p-bold'>Contact: </span><a href='mailto:ntejerac@gmail.com'>ntejerac@gmail.com</a></p>
                    </div>
                </div>
            </div>
            <WhiteLine/>
            <p className='big-cat-text'>big cat:</p>
            <div className="svg-container">
                <img src={CatVector} alt="Cat Vector" />
            </div>
        </div>
        </>
    );
}

export default AboutMe;