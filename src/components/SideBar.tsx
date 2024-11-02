import { Link } from 'react-router-dom';
import './styles/SideBar.css';

interface SideBarProps {
    currentPage: string;
}

function SideBar({currentPage}: SideBarProps) {
    return (
        <>
            <div className="sidebar-space"></div>
            <div className='sidebar'>
                <div className='box1 flex flex-col justify-between'>
                    <ul>
                        <li className={currentPage === 'aboutme' ? 'selected' : ''}><Link to="/about">About Me</Link></li>
                        <li className={currentPage === 'skills' ? 'selected' : ''}><Link to='/skills'>Skills</Link></li>
                        <div className='li-separation'></div>
                        <li className={currentPage === 'illustrations' ? 'selected' : ''}><Link to='/illustrations'>Illustrations</Link></li>
                        <li className={currentPage === 'games' ? 'selected' : ''}><Link to='/games'>Games</Link></li>
                        <li className={currentPage === 'projects' ? 'selected' : ''}><Link to='/projects'>Projects</Link></li>
                        <li className={currentPage === 'mockups' ? 'selected' : ''}><Link to='/mockups'>Mockups</Link></li>
                    </ul>
                    <ul>
                        <li><a className='text-[14px]' href='https://sauttize.itch.io/' target='_blank'>itch.io</a></li>
                        <li><a className='text-[14px]' href='https://www.instagram.com/sauttze/' target='_blank'>instagram</a></li>
                        {/*<li><a className='text-[14px]' href='' target='_blank'>contact me</a></li>*/}
                    </ul>
                </div>
                <div className="bottom-decoration">
                    <div className="box2"></div>
                    <div className="box3"></div>
                </div>
            </div>
        </>
    );
}

export default SideBar;