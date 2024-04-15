//here goes the logic and style for Cart Content when it is open && empty or when it's open and filled with content
import { useContext, useEffect, useState } from "react";
import { product } from "../models/ProductDescription.model"
import prdThumbnail from '../assets/images/image-product-1-thumbnail.jpg'
import { CounterContext } from "../contexts/CounterContextProvider";
import deleteIcon from '../assets/images/icon-delete.svg'


const Cart = () => {
    const { count, dispatch, setCount, setDispatch } = useContext(CounterContext);
    const [cartHasItems, setCartHasItems] = useState(count > 0 ? true : false);
    const { title, price } = product;
    const [emptyCart, setEmptyCart] = useState('Your cart is empty');

    // for cart content ultimate update
    useEffect(() => {
        setCartHasItems(dispatch > 0 ? true : false)
        if (cartHasItems === false) {
            setCount(0)
            setDispatch(0)
        }
    }, [dispatch, count, cartHasItems, setCartHasItems, setCount, setDispatch])

    // handle checkout button
    const handleCheckOut = () => {
        setCount(0)
        setDispatch(0)
        setEmptyCart('Thank you for your purchase!')
    }


    return (

        <>
            {
                cartHasItems
                    ?
                    <>
                        <div className="cart_content">
                            <div className="cart_content_thumbnail">
                                <img src={prdThumbnail} alt="" />
                            </div>
                            <div className="cart_content_description">
                                <p>{title}</p>
                                <p>${price.toFixed(2)} x {count} <span>${(price * count).toFixed(2)}</span> </p>
                            </div>
                            <div className="cart_content_delete">
                                <img src={deleteIcon} alt="delete-icon"
                                    onClick={() => setCartHasItems(false)}
                                />
                            </div>
                        </div>
                        <div className="cart_content_button">
                            <button onClick={handleCheckOut}>Checkout</button>
                        </div>
                    </>
                    :

                    //when cart is empty
                    <div className="empty_cart_text">
                        <p>{emptyCart}</p>
                    </div>
            }
        </>


    )
}

export default Cart