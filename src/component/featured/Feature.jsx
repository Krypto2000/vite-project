
import './feature.css'
import featureIMG from '../../assets/cryptoimage.jpg'
const Feature = () => {
  return (
    <div className='feature'>
        <div className='feature-left'>
        <h1>
          <span>BLOCK CHAIN WEBSITE</span>
        <span>A PLATFORM WHERE YOU CAN TRADE</span>
        <span>ALL COINS</span>
        </h1>
        </div>
        <div className='feature-right'>
            <img src={featureIMG} alt=""  />

        </div>
       

    </div>
  )
}

export default Feature