import '../sass/NavBar.scss'
import { NavBarContent } from '../models/NavBar.model'
import CustomLogo from './CustomLogo';
import { CounterContext } from '../contexts/CounterContextProvider';
import { useContext } from 'react';

const NavBar = () => {
    const { count } = useContext(CounterContext)
    let { cartCount } = NavBarContent
    cartCount = count
    const { links, avatar, logo } = NavBarContent;

    return (
        <nav>
            <div className='navbar_ctn_left'>
                <img src={logo.src} alt={logo.alt} />

                {
                    links.map((link, index) => {
                        return <a href="#" key={index} className='onHover'>{link}</a>
                    })
                }
            </div>

            <div className='navbar_ctn_right'>
                <CustomLogo />
                <span className='cartCount'>{cartCount}</span>
                <img src={avatar.src} alt={avatar.alt} className='avatar' />
                <span className='line'></span>
            </div>
        </nav>
    )
}
export default NavBar