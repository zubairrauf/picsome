import {useState, useContext} from 'react'
import {AppContext} from '../AppContext'

const CartItem = ({item}) => {
    const {removeFromCart} = useContext(AppContext)
    const [hovered, setHovered] = useState(false)
    const binIconClass = hovered ? 'fill' : 'line'

    return (
        <div className='cart-item'>
            <i className={`ri-delete-bin-${binIconClass}`} 
                onClick={() => removeFromCart(item.id)}
                onMouseOver={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}   
            >    
            </i>
            <img src={item.url} width="130px" alt={item.id}/>
            <p>$5.99</p>
        </div>
    )
}
export default CartItem