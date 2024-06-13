
import './coin.css'

const coinitem = ({market_cap_rank,image,name,market_cap,current_price,market_cap_change_percentage_24h,
  total_volume}) => {
  return (
    <div className='coin-row'>
       
        <p>{market_cap_rank}</p>
        <div className='img-symbol'>
            <img alt='symbol' src={image}/>
            <p>{name}</p>
        </div>
        <p>{current_price}</p>
        <p className="hide-mobile">{market_cap_change_percentage_24h}</p>
        <p className="hide-mobile">{total_volume}</p>
<p>{market_cap}</p>  
      
    </div>
  )
}

export default coinitem