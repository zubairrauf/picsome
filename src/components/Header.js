import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {AppContext} from '../AppContext'

function Header() {
    const {cartItems} = useContext(AppContext)
    const cartIconClassName = cartItems.length ? 'ri-shopping-cart-fill' : 'ri-shopping-cart-line'
    return (
        <header>
            <Link to='/'><h2>PicSome</h2></Link>
            <Link to='cart'><i className={`${cartIconClassName} ri-fw ri-2x`}></i></Link>
        </header>
    )
}

export default Header