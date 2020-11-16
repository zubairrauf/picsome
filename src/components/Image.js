
import {useState} from 'react'

const Image = ({className, img}) => {
    const [isHovered, setIsHovered] = useState(false)
    console.log('Hovered: ' + isHovered)
    return(
        <div 
            className={`${className} image-container`}
            onMouseOver={()=> setIsHovered(true)}
            onMouseLeave ={()=> setIsHovered(false)}
        >
            {isHovered ? <i className="ri-heart-line favorite"></i> :''}
            {isHovered ? <i className="ri-add-circle-line cart"></i> :''}
            
            
            <img 
                src={img.url}
                alt={`Number ${img.id}`} 
                className='image-grid' 
            />
        </div>
    )
}

export default Image