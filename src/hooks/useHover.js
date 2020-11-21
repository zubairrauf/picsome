import {useState, useEffect, useRef} from 'react'

const useHover = () => {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    function enter() {
        setHovered(true)
    }
    
    function leave() {
        setHovered(false)
    }

    useEffect(() => {
        const refElem = ref.current
        refElem.addEventListener('mouseenter', enter)
        refElem.addEventListener('mouseleave', leave)
        
        
        return () => {
            refElem.removeEventListener('mouseenter', enter)
            refElem.removeEventListener('mouseleave', leave)
        }
    }, [])
    
    return [hovered, ref]
}

export default useHover