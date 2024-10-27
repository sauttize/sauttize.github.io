import { Link } from 'react-router-dom';
import './styles/SideBar.css';

interface SideBarProps {
    currentPage: string;
}

function SideBar({currentPage}: SideBarProps) {
    return (
        <div className='sidebar'>
            <div className='box1'>
                <ul>
                    <li className={currentPage === 'aboutme' ? 'selected' : ''}><Link to="/about">About Me</Link></li>
                    <li className={currentPage === 'skills' ? 'selected' : ''}><Link to='/skills'>Skills</Link></li>
                    <div className='li-separation'></div>
                    <li className={currentPage === 'illustrations' ? 'selected' : ''}><Link to='/illustrations'>Illustrations</Link></li>
                    <li className={currentPage === 'games' ? 'selected' : ''}><Link to='/games'>Games</Link></li>
                    <li className={currentPage === 'projects' ? 'selected' : ''}><Link to='/projects'>Projects</Link></li>
                    <li className={currentPage === 'mockups' ? 'selected' : ''}><Link to='/mockups'>Mockups</Link></li>
                </ul>
            </div>
            <div className="bottom-decoration">
                <div className="box2"></div>
                <div className="box3"></div>
            </div>
        </div>
    );
}

export default SideBar;