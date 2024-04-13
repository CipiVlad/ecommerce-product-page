import '../sass/NavBar.scss'
import { NavBarContent } from '../models/NavBar.model'
import CustomLogo from './CustomLogo';
import { CounterContext } from '../contexts/CounterContextProvider';
import { useContext, useEffect } from 'react';

const NavBar = () => {
    const { links, avatar, logo } = NavBarContent;

    const { dispatch, setDispatch, count, setCount } = useContext(CounterContext)
    let { cartCount } = NavBarContent

    return (
        <nav>
            <div className='navbar_ctn_left'>
                <img src={logo.src} alt={logo.alt} />

                {
                    links.map((link, index) => {
                        return <a href="https://cipivlad.github.io/myportfoliosite/" key={index} className='onHover'>{link}</a>
                    })
                }
            </div>

            <div className='navbar_ctn_right'>
                <CustomLogo />
                <span className='cartCount'>{dispatch}</span>
                <img src={avatar.src} alt={avatar.alt} className='avatar' />
                <span className='line'></span>
            </div>
        </nav>
    )
}
export default NavBar