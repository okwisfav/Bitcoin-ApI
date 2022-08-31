import React,{useState, useEffect} from 'react'
// import BTC from '../asset/btc-img.png';
import {FiArrowUpRight, FiArrowUpDown, FiArrowDown} from 'react-icons/fi'
import './Featured.css'
import axios from 'axios';
const Featured = () => {
    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    console.log(data)
    if(!data) return null

    if (!data) return null
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
                <div className='card'>
                 <div className='top'>
                     {/* <img src={BTC} alt="/" /> */}
                     <img src={data[0].image} alt='' />;
                 </div>
                 <div>
                     <h5>{data[0].name}</h5>
                     <p>${data[0].current_price.toLocaleString()}</p>
                 </div>
                 {data[0].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[0].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[0].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
             </div>
             <div className='card'>
                 <div className='top'>
                     {/* <img src={BTC} alt="/" /> */}
                     <img src={data[0].image} alt='' />;
                 </div>
                 <div>
                     <h5>{data[0].name}</h5>
                     <p>${data[0].current_price.toLocaleString()}</p>
                 </div>
                 {data[0].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[0].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[0].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
             </div>
             <div className='card'>
                 <div className='top'>
                     {/* <img src={BTC} alt="/" /> */}
                     <img src={data[0].image} alt='' />;
                 </div>
                 <div>
                     <h5>{data[0].name}</h5>
                     <p>${data[0].current_price.toLocaleString()}</p>
                 </div>
                 {data[0].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[0].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[0].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
             </div>
             <div className='card'>
                 <div className='top'>
                     {/* <img src={BTC} alt="/" /> */}
                     <img src={data[0].image} alt='' />;
                 </div>
                 <div>
                     <h5>{data[0].name}</h5>
                     <p>${data[0].current_price.toLocaleString()}</p>
                 </div>
                 {data[0].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[0].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[0].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
             </div>
                 <div className='card'>
                 <div className='top'>
                     {/* <img src={BTC} alt="/" /> */}
                     <img src={data[0].image} alt='' />;
                 </div>
                 <div>
                     <h5>{data[0].name}</h5>
                     <p>${data[0].current_price.toLocaleString()}</p>
                 </div>
                 {data[0].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[0].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[0].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
             </div>
             <div className='card'>
                 <div className='top'>
                     {/* <img src={BTC} alt="/" /> */}
                     <img src={data[0].image} alt='' />;
                 </div>
                 <div>
                     <h5>{data[0].name}</h5>
                     <p>${data[0].current_price.toLocaleString()}</p>
                 </div>
                 {data[0].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[0].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[0].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
             </div>
            </div>
        </div>
    </div>
  )
}

export default Featured
