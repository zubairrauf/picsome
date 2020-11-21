import {useContext} from 'react'
import {AppContext} from '../AppContext'
import useHover from '../hooks/useHover'

const CartItem = ({item}) => {
    const {removeFromCart} = useContext(AppContext)
    const [hovered, ref] = useHover()
    const binIconClass = hovered ? 'fill' : 'line'

    return (
        <div className='cart-item'>
            <i className={`ri-delete-bin-${binIconClass}`} 
                onClick={() => removeFromCart(item.id)}
                ref = {ref}   
            >    
            </i>
            <img src={item.url} width="130px" alt={item.id}/>
            <p>$5.99</p>
        </div>
    )
}
export default CartItem