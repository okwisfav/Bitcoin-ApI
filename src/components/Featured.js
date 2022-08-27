import React,{useState, useEffect} from 'react'
import BTC from '../asset/btc-img.png';
import {FiArrowUpRight, FiArrowUpDown} from 'react-icons/fi'
import './Featured.css'
import axios from 'axios';
const Featured = () => {
    const {data, setData} = useState(null)
    const url ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=6&page=1&sparkline=false'
    useEffect(() =>{
       axios.get(url).then((response) =>{
         setData(response.data)
       }).catch((error) => {
         console.log(error)
       })
    }, [])
  return (
    <div className='featured'>
        <div className='container'>
            {/* Left */}
                <div className='left'>
                    <h2>Explore top Crypto's Like Bitcoin, Etherum, and Dogecoin</h2>
                    <p>see all available assets: Crytocurrencies and NFT's</p>
                    <button className='btn'>See More Coins</button>
                </div>
            {/* Right */}
            <div className='right'>
                 <div className='top'>
                     <img src={BTC} alt="/" />
                 </div>
                 <div>
                     <h5>Bitcoin</h5>
                     <p>20,456</p>
                 </div>
                 <span><FiArrowUpRight/>2.5%</span>
            </div>
        </div>
    </div>
  )
}

export default Featured
