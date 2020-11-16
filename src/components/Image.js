import {useState} from 'react'
import { useContext } from 'react'
import {AppContext} from '../AppContext'

const Image = ({className, img}) => {
    const [isHovered, setIsHovered] = useState(false)
    const {toggleFavorite} = useContext(AppContext)
    const favIcon = () => {
        if(img.isFavorite){
            return <i className="ri-heart-fill favorite" onClick={()=> toggleFavorite(img.id)}></i>
        } else if(isHovered) {
            return <i className="ri-heart-line favorite" onClick={()=> toggleFavorite(img.id)} ></i>
        }
    }
    
    return(
        <div 
            className={`${className} image-container`}
            onMouseOver={()=> setIsHovered(true)}
            onMouseLeave ={()=> setIsHovered(false)}
        >
            {favIcon()}
            {isHovered && <i className="ri-add-circle-line cart"></i>}
            
            
            <img 
                src={img.url}
                alt={`Number ${img.id}`} 
                className='image-grid'
            />
        </div>
    )
}

export default Image