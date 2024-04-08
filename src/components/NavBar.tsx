import '../sass/NavBar.scss'
import { NavBarContent } from '../models/NavBar.model'
import CustomLogo from './CustomLogo';


const NavBar = () => {
    // need some logic for 
    const { cartCount, links, avatar, logo } = NavBarContent;
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
                {/* on handleCartClick here will appear another component

                */}
                <span className='line'></span>
            </div>
        </nav>
    )
}
export default NavBar