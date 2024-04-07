import { product } from "../models/ProductDescription.model"
import '../sass/ProductDescription.scss'
import AddToCart from "./AddToCart";
import Counter from "./Counter";

const ProductDescription = () => {
    const { title, description, price, discountPercentage, formerPrice, brand } = product;

    return (
        <div className="product_description_container">
            <p>{brand.toUpperCase()}</p>
            <h1>{title}</h1>
            <p>{description}</p>
            <h3>${price.toFixed(2)} <span>{discountPercentage}%</span> </h3>
            <p className="former_price">${formerPrice.toFixed(2)}</p>
            <div className="add_to_cart_container">
                <Counter />
                <AddToCart />
            </div>
        </div>
    )
}
export default ProductDescription