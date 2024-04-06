import logo from '../assets/images/logo.svg'
import cart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
interface INavBarContent {
    logo: { src: string, alt: string }
    links: string[]
    cartIcon: { src: string, alt: string }
    cartCount: number
    avatar: { src: string, alt: string }
}

export const NavBarContent: INavBarContent = {
    logo: { src: logo, alt: "sneakers logo" },
    links: ["Collections", " Men", " Women", " About", " Contact"],
    cartIcon: { src: cart, alt: "cart icon" },
    cartCount: 0,
    avatar: { src: avatar, alt: "avatar thumbnail" },
}
