import '../sass/AddToCart.scss'
import cartIcon from '../assets/images/icon-cart.svg'
const AddToCart = () => {
    return (
        <div className="add_to_cart">
            <img src={cartIcon} alt="icon-cart" />
            <p>Add to cart</p>
        </div>
    )
}
export default AddToCart