import './styles/SideBar.css';
import SideBarButton from './SideBarButton';
import { useState } from 'react';

interface SideBarProps {
    onButtonClick: (page: string) => void;
}

function SideBar({ onButtonClick }: SideBarProps) {
    const [currentPage, setCurrentPage] = useState('About Me');

    function HandleClick(page : string) {
        onButtonClick(page);
        setCurrentPage(page);
    }

    return (
        <>
            <div className="sidebar-space"></div>
            <div className='sidebar'>
                <div className='box1 flex flex-col justify-between'>
                    <ul>
                        <SideBarButton currentPage='About Me' onButtonClick={HandleClick}
                        selected={ currentPage == 'About Me' }/>
                        <SideBarButton currentPage='Skills' onButtonClick={HandleClick}
                        selected={ currentPage == 'Skills' } />
                        <div className='li-separation'></div>
                        <SideBarButton currentPage='Illustrations' onButtonClick={HandleClick}
                        selected={ currentPage == 'Illustrations' }/>
                        <SideBarButton currentPage='Games' onButtonClick={HandleClick}
                        selected={ currentPage == 'Games' }/>
                        <SideBarButton currentPage='Projects' onButtonClick={HandleClick}
                        selected={ currentPage == 'Projects' }/>
                        <SideBarButton currentPage='Mockups' onButtonClick={HandleClick}
                        selected={ currentPage == 'Mockups' }/>
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