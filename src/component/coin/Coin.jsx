import "./coin.css"
import { useEffect, useState } from "react"
import CoinItem from "./Coinitem"
import axios from "axios"
import { Link } from "react-router-dom"
const Coin = () => {
  const [coins, setCoins] = useState([])
  
  
 
  
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
    .then((response) => {
     console.log(response);
      setCoins(response.data)

    }).catch((error) =>{
      console.log(error);
    })
    
  
   
  }, [])
  
  
    
  
    return (
      <div className='container'>
          <h1>Authorized Coins with current rate</h1>
          <div className='heading'>
              <p> #</p>
              <p className="coin-name">Coin</p>
              <p>Price</p>
              <p>24h</p>
              <p className="hide-mobile">Volume</p>
              <p className="hide-mobile">Mkt Cap</p>
          </div>
  
  {
    coins.map(({id, market_cap,image,name,market_cap_rank,current_price,
      market_cap_change_percentage_24h, 
      total_volume},key) =>(
      <>
        <Link to={`/coin/${id}`}>
  <CoinItem key={key} market_cap={market_cap} image={image} name ={name} market_cap_rank={market_cap_rank} current_price
={current_price} market_cap_change_percentage_24h={market_cap_change_percentage_24h} 
total_volume={total_volume}/>
   </Link> 
   </>)) 
  }
          
  
  
  
  
  
  
  
  
      </div>
    )
  }
  
export default Coin