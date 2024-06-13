import './scrolldown.css'
import { FaLongArrowAltDown } from "react-icons/fa";


const Scrolldown = () => {
  return (
    <div className="floating-icon"><a href="#coinz"><p>scroll down</p>
    <FaLongArrowAltDown color='orangered' className='bouncing-icon'/>
    </a>
    </div>
  )
}

export default Scrolldown
