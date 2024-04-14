import '../sass/NavBar.scss'
import { NavBarContent } from '../models/NavBar.model'
import CustomLogo from './CustomLogo';
import { CounterContext } from '../contexts/CounterContextProvider';
import { useContext, useEffect, useState } from 'react';

const NavBar = () => {
    const { links, avatar, logo } = NavBarContent;

    const { dispatch, setDispatch, count, setCount } = useContext(CounterContext)
    let { cartCount } = NavBarContent

    const [openSidebar, setSidebar] = useState(false)
    const handleOpenSidbar = () => {
        setSidebar(!openSidebar)
    }
    console.log(openSidebar);


    // sidebar



    return (
        <>
            <div className={openSidebar ? 'sidebar ' : 'sidebar active'} onClick={handleOpenSidbar}>

                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#ff7d1a" fill-rule="evenodd" /></svg>

                <ul>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div >
            <nav>
                <div className='navbar_ctn_left'>
                    <div className={openSidebar ? 'closeMenu' : 'openMenu'} onClick={handleOpenSidbar}></div>
                    <img src={logo.src} alt={logo.alt} />
                    {
                        links.map((link, index) => {
                            return <a href="https://cipivlad.github.io/myportfoliosite/" target="_blank" key={index} className='onHover'>{link}</a>
                        })
                    }
                </div>
                <div className='navbar_ctn_right'>
                    <CustomLogo />
                    <span className={dispatch > 0 ? 'cartCount' : 'noCartCount'}>{dispatch}</span>
                    <img src={avatar.src} alt={avatar.alt} className='avatar' />
                    <span className='line'></span>
                </div>
            </nav >
        </>
    )
}
export default NavBar