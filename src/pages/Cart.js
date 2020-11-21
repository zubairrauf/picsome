import {useState, useContext} from "react"
import {AppContext} from '../AppContext'
import CartItem from '../components/CartItem'

function Cart() {
    const [btnText, setBtnText] = useState('Place order')
    const {cartItems, emptyCart} = useContext(AppContext)
    const totalPrice = (cartItems.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})
    const imageElements = cartItems.map((item, i) => (
        <CartItem key={item.id} item={item}/>
    ))
    
    const placeOrder = () => {
        setBtnText('Ordering...')
        setTimeout(()=> {
            emptyCart()
            console.log('Order placed')
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Cart page</h1>
            {imageElements}
            <p className="total-cost">Total: {totalPrice} </p>
            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={placeOrder}>{btnText}</button>
                </div> :
                <p>You have no items in your cart.</p>
            }
        </main>
    )
}

export default Cart