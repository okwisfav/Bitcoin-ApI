import React from 'react'
import './Hero.css';
import Crypto from '../asset/hero-img.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
             {/* Left Side */}
              <div className='left'>
                 <p>Buy & Sell Crypto 24/7 using your retirement account</p>
                 <h1>Ivest in Cryptocurrecy With Favour</h1>
                 <p>Buy, Sell, and store hundreds of Cryptocurrencies</p>
                 <div className='input-container'>
                    <input type='email' placeholder='Enter Your email' />
                    <button className='btn'>Learn More</button>
                 </div>
              </div>

               {/* right Side */}
               <div className='right'>
                   <div className='img-container'>
                       <img src={Crypto} alt='' />
                    </div>  
               </div>
        </div>
    </div>
  )
}

export default Hero
