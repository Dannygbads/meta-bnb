import React, { useState } from 'react'
import ReactDOM  from 'react-dom'
import HeroImage from '../hero-img.png'
import MbToken from '../mbt.png'
import MetaMask from '../metamask.png'
import OpenSea from '../opensea.png'
import HeroImage1 from '../hero-img/hero-1.png'
import HeroImage2 from '../hero-img/hero-2.png'
import HeroImage3 from '../hero-img/hero-3.png'
import HeroImage4 from '../hero-img/hero-4.png'


function HeroSection(){

    

    return(
        <div className='hero'>
           
            <div className='hero-top'>
                <img id='hero-img' alt='nft images' src={HeroImage}/>
                <div className='mobile-hero-img'>
                    <div className='row1'>
                        <img id='hero-img1' className='hero-img' alt='nft images' src={HeroImage1}/>
                        <img id='hero-img2' className='hero-img'  alt='nft images' src={HeroImage2}/>
                    </div>
                    <div className='row2'>
                        <img id='hero-img3' className='hero-img'  alt='nft images' src={HeroImage3}/>
                        <img id='hero-img4' className='hero-img'  alt='nft images' src={HeroImage4}/>
                    </div>
                
                  

                </div>
                <div className='hero-txt'>
                    <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span> </h1>
                    <p>
                        we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                    </p>
                    <div className='search'>
                        <input type={'search'} placeholder='Search for location' id='search'  />
                        <button>Search</button>
                    </div>
                </div>
            </div>
            <div className='hero-bottom'>
                <div className='mbt'>
                    <img className='mbt-img' alt='mb token' src={MbToken}/>
                </div>
                <div className='metamask'>
                    <img className='metamask-img' alt='metamask' src={MetaMask}/>
                </div>
                <div className='opensea'>
                    <img className='opensea-img' alt='opensea' src={OpenSea}/>
                </div>
            </div>
           
        </div>
    )
}
export default HeroSection