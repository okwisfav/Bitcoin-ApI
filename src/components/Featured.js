import React from 'react'
import BTC from '../asset/btc-img.png';
import {FiArrowUpRight, FiArrowUpDown} from 'react-icons/fi'
import './Featured.css'
const Featured = () => {
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
