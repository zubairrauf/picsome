import {useState} from 'react'
import { useContext } from 'react'
import {AppContext} from '../AppContext'
import PropTypes from 'prop-types'

const Image = ({className, img}) => {
    const [isHovered, setIsHovered] = useState(false)
    const {toggleFavorite} = useContext(AppContext)
    const {cartItems, addToCart, removeFromCart } = useContext(AppContext)

    const favIcon = () => {
        if(img.isFavorite){
            return <i className="ri-heart-fill favorite" onClick={()=> toggleFavorite(img.id)}></i>
        } else if(isHovered) {
            return <i className="ri-heart-line favorite" onClick={()=> toggleFavorite(img.id)} ></i>
        }
    }
    
    const cartIcon2 = isHovered && <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
    
    const cartIcon= () => {
        const isInCart = cartItems.some(item => item.id === img.id)
        if(isInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if(isHovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }
    
    return(
        <div 
            className={`${className} image-container`}
            onMouseOver={()=> setIsHovered(true)}
            onMouseLeave ={()=> setIsHovered(false)}
        >
            {favIcon()}
            {cartIcon()}
            
            <img 
                src={img.url}
                alt={`Number ${img.id}`} 
                className='image-grid'
            />
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image