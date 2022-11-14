import React from 'react'
import ReactDOM  from 'react-dom'
import IntersectingImage from '../inter-image.jpg'
import Image1 from '../image1.png'
import Image2 from '../image2.png'
import Image3 from '../image3.png'
import MetaImage from '../meta-img.jpg'

function Learn(){
    return(
        <section id='learn-more-section'>
            <div className='intersecting-img'>
                {/* <img className='im' alt='nft' src={MetaImage}/> */}
               <img className='im1' alt='nfts' src={Image1}/>
                <img className='im2' alt='nfts' src={Image2}/>
                <img className='im3' alt='nfts' src={Image3}/>
            </div>
            <div className='txt'>
                <h4>Metabnb Nfts</h4>
                <p>
                Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                </p>
                <button>Learn more</button>
            </div>
        </section>
    )
}

export default Learn