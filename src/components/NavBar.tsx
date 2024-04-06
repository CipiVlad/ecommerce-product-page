import '../sass/NavBar.scss'
import { NavBarContent } from '../models/NavBar.model'


const NavBar = () => {
    // need some logic for 
    const { cartCount, links, avatar, cartIcon, logo } = NavBarContent

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
                <img src={cartIcon.src} alt={cartIcon.alt} className='cartIcon' />
                {/* //  onClick={handleCartClick} */}
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