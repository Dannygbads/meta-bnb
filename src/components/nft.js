import React, { useState , useEffect } from "react"
import ReactDOM  from 'react-dom'
import CardImage1 from '../card-image/card1.jpg'
import CardImage2 from '../card-image/card2.jpg'
import CardImage3 from '../card-image/card 3.jpg'
import CardImage4 from '../card-image/card4.jpg'
import CardImage5 from '../card-image/card5.jpg'
import CardImage6 from '../card-image/card6.jpg'
import CardImage7 from '../card-image/card7.jpg'
import CardImage8 from '../card-image/card8.jpg'




function Stars() {

  
    
  return (
        
     <svg width="92" height="12" viewBox="0 0 92 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.12475 1.58383C5.50519 0.895394 6.49481 0.895394 6.87525 1.58383L7.65696 2.99839C7.80037 3.2579 8.05154 3.44039 8.34267 3.49659L9.92956 3.80292C10.7019 3.952 11.0077 4.89318 10.4705 5.46774L9.36673 6.64831C9.16423 6.8649 9.06829 7.16017 9.10481 7.45442L9.30385 9.0583C9.40072 9.83887 8.6001 10.4206 7.88767 10.0872L6.42379 9.40229C6.15524 9.27663 5.84476 9.27663 5.57621 9.40229L4.11233 10.0872C3.3999 10.4206 2.59928 9.83887 2.69615 9.0583L2.89519 7.45442C2.93171 7.16017 2.83577 6.8649 2.63327 6.64831L1.5295 5.46774C0.992327 4.89318 1.29814 3.952 2.07044 3.80292L3.65733 3.49659C3.94846 3.44039 4.19963 3.2579 4.34304 2.99839L5.12475 1.58383Z" fill="url(#paint0_linear_1_384)"/>
    <path d="M25.1248 1.58383C25.5052 0.895394 26.4948 0.895394 26.8752 1.58383L27.657 2.99839C27.8004 3.2579 28.0515 3.44039 28.3427 3.49659L29.9296 3.80292C30.7019 3.952 31.0077 4.89318 30.4705 5.46774L29.3667 6.64831C29.1642 6.8649 29.0683 7.16017 29.1048 7.45442L29.3039 9.0583C29.4007 9.83887 28.6001 10.4206 27.8877 10.0872L26.4238 9.40229C26.1552 9.27663 25.8448 9.27663 25.5762 9.40229L24.1123 10.0872C23.3999 10.4206 22.5993 9.83887 22.6961 9.0583L22.8952 7.45442C22.9317 7.16017 22.8358 6.8649 22.6333 6.64831L21.5295 5.46774C20.9923 4.89318 21.2981 3.952 22.0704 3.80292L23.6573 3.49659C23.9485 3.44039 24.1996 3.2579 24.343 2.99839L25.1248 1.58383Z" fill="url(#paint1_linear_1_384)"/>
    <path d="M45.1248 1.58383C45.5052 0.895394 46.4948 0.895394 46.8752 1.58383L47.657 2.99839C47.8004 3.2579 48.0515 3.44039 48.3427 3.49659L49.9296 3.80292C50.7019 3.952 51.0077 4.89318 50.4705 5.46774L49.3667 6.64831C49.1642 6.8649 49.0683 7.16017 49.1048 7.45442L49.3039 9.0583C49.4007 9.83887 48.6001 10.4206 47.8877 10.0872L46.4238 9.40229C46.1552 9.27663 45.8448 9.27663 45.5762 9.40229L44.1123 10.0872C43.3999 10.4206 42.5993 9.83887 42.6961 9.0583L42.8952 7.45442C42.9317 7.16017 42.8358 6.8649 42.6333 6.64831L41.5295 5.46774C40.9923 4.89318 41.2981 3.952 42.0704 3.80292L43.6573 3.49659C43.9485 3.44039 44.1996 3.2579 44.343 2.99839L45.1248 1.58383Z" fill="url(#paint2_linear_1_384)"/>
    <path d="M65.1248 1.58383C65.5052 0.895394 66.4948 0.895394 66.8752 1.58383L67.657 2.99839C67.8004 3.2579 68.0515 3.44039 68.3427 3.49659L69.9296 3.80292C70.7019 3.952 71.0077 4.89318 70.4705 5.46774L69.3667 6.64831C69.1642 6.8649 69.0683 7.16017 69.1048 7.45442L69.3039 9.0583C69.4007 9.83887 68.6001 10.4206 67.8877 10.0872L66.4238 9.40229C66.1552 9.27663 65.8448 9.27663 65.5762 9.40229L64.1123 10.0872C63.3999 10.4206 62.5993 9.83887 62.6961 9.0583L62.8952 7.45442C62.9317 7.16017 62.8358 6.8649 62.6333 6.64831L61.5295 5.46774C60.9923 4.89318 61.2981 3.952 62.0704 3.80292L63.6573 3.49659C63.9485 3.44039 64.1996 3.2579 64.343 2.99839L65.1248 1.58383Z" fill="url(#paint3_linear_1_384)"/>
    <path d="M85.1248 1.58383C85.5052 0.895394 86.4948 0.895394 86.8752 1.58383L87.657 2.99839C87.8004 3.2579 88.0515 3.44039 88.3427 3.49659L89.9296 3.80292C90.7019 3.952 91.0077 4.89318 90.4705 5.46774L89.3667 6.64831C89.1642 6.8649 89.0683 7.16017 89.1048 7.45442L89.3039 9.0583C89.4007 9.83887 88.6001 10.4206 87.8877 10.0872L86.4238 9.40229C86.1552 9.27663 85.8448 9.27663 85.5762 9.40229L84.1123 10.0872C83.3999 10.4206 82.5993 9.83887 82.6961 9.0583L82.8952 7.45442C82.9317 7.16017 82.8358 6.8649 82.6333 6.64831L81.5295 5.46774C80.9923 4.89318 81.2981 3.952 82.0704 3.80292L83.6573 3.49659C83.9485 3.44039 84.1996 3.2579 84.343 2.99839L85.1248 1.58383Z" fill="url(#paint4_linear_1_384)"/>
    <defs>
    <linearGradient id="paint0_linear_1_384" x1="1.37419" y1="-3.6517e-07" x2="11.5161" y2="-5.09166e-07" gradientUnits="userSpaceOnUse">
    <stop stop-color="#A02279"/>
    <stop stop-color="#A02279"/>
    </linearGradient>
    <linearGradient id="paint1_linear_1_384" x1="21.3742" y1="-3.6517e-07" x2="31.5161" y2="-5.09166e-07" gradientUnits="userSpaceOnUse">
    <stop stop-color="#A02279"/>
    <stop stop-color="#A02279"/>
    </linearGradient>
    <linearGradient id="paint2_linear_1_384" x1="41.3742" y1="-3.6517e-07" x2="51.5161" y2="-5.09166e-07" gradientUnits="userSpaceOnUse">
    <stop stop-color="#A02279"/>
    <stop stop-color="#A02279"/>
    </linearGradient>
    <linearGradient id="paint3_linear_1_384" x1="61.3742" y1="-3.6517e-07" x2="71.5161" y2="-5.09166e-07" gradientUnits="userSpaceOnUse">
    <stop stop-color="#A02279"/>
    <stop stop-color="#A02279"/>
    </linearGradient>
    <linearGradient id="paint4_linear_1_384" x1="81.3742" y1="-3.6517e-07" x2="91.5161" y2="-5.09166e-07" gradientUnits="userSpaceOnUse">
    <stop stop-color="#A02279"/>
    <stop stop-color="#A02279"/>
    </linearGradient>
    </defs>
    </svg>

  )
  
}
function Heart(){
    const [clickState, setClickState] = useState('heart');


    const ChangeState = (e) =>{
        e.preventDefault()
        
        if(clickState==='heart'){
            setClickState('heart-active')

        }else if(clickState==='heart-active'){
            setClickState('heart')
        }

        

        
    }
    return(
        <svg onClick={ChangeState}   className={clickState} width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.59964 2.62953L10 3.16466L10.4004 2.62953C11.3204 1.39974 12.7949 0.600006 14.44 0.600006C17.2315 0.600006 19.5 2.87381 19.5 5.69001C19.5 6.82563 19.3189 7.87375 19.0043 8.84609L19.0032 8.84935C18.249 11.2361 16.7035 13.1596 15.0354 14.5933C13.365 16.0289 11.6004 16.9483 10.4589 17.3367L10.4589 17.3366L10.4536 17.3385C10.3537 17.3737 10.1893 17.4 10 17.4C9.81075 17.4 9.64625 17.3737 9.54641 17.3385L9.54642 17.3385L9.54106 17.3367C8.3996 16.9483 6.635 16.0289 4.96465 14.5933C3.29649 13.1596 1.75096 11.2361 0.996762 8.84935L0.996774 8.84935L0.995722 8.8461C0.681141 7.87375 0.5 6.82563 0.5 5.69001C0.5 2.87381 2.76848 0.600006 5.56 0.600006C7.2051 0.600006 8.67958 1.39974 9.59964 2.62953Z" fill="#D7D7D7" stroke="url(#paint0_linear_2610_399)"/>
<defs>
<linearGradient id="paint0_linear_2610_399" x1="10" y1="17.9" x2="10" y2="0.100006" gradientUnits="userSpaceOnUse">
<stop stop-color="#1D0E3D"/>
<stop offset="1" stop-color="#0F051D"/>
</linearGradient>
</defs>
</svg>
    )
}


function Nft(){
    return(
        <section className='nft-section'>
            <h2>Inspiration for your next adventure</h2>
            <div className='nft'>
                
                <div className='card nft-card-1'>
                    <div className='nft-card'>
                        <div className='image'>
                            <img className='card-image1' alt='nft ' src={CardImage1}/>
                            <Heart/>
                        </div>
                        <div className='card-txt'>
                            <div className='left-txt'>
                                <span>Desert King</span>
                                <p>2345km away</p>
                            </div>
                            <div className='right-txt'>
                                <h3>1MBT per night</h3>
                                <p>available for 2weeks stay</p>
                            </div>
                        </div>
                        <div className='rating'>
                        <Stars/>

                        </div>
                    </div>
                   
                
                </div>

                <div className='card nft-card-2'>
                    <div className='nft-card'>
                        <div className='image'>
                            <img className='card-image2' alt='nft ' src={CardImage2}/>
                            <Heart/>


                        </div>
                        <div className='card-txt'>
                            <div className='left-txt'>
                                <span>Desert King</span>
                                <p>2345km away</p>
                            </div>
                            <div className='right-txt'>
                                <h3>1MBT per night</h3>
                                <p>available for 2weeks stay</p>
                            </div>
                        </div>
                        <div className='rating'>
                            <Stars/>
                        </div>
                    </div>
                </div>

                <div className='card nft-card-3'>
                    <div className='nft-card'>
                        <div className='image'>
                            <img className='card-image3' alt='nft ' src={CardImage3}/>
                            <Heart/>


                        </div>
                        <div className='card-txt'>
                            <div className='left-txt'>
                                <span>Desert King</span>
                                <p>2345km away</p>
                            </div>
                            <div className='right-txt'>
                                <h3>1MBT per night</h3>
                                <p>available for 2weeks stay</p>
                            </div>
                        </div>
                        <div className='rating'>
                            <Stars/>
                        </div>
                    </div>
                   
                
                </div>

                <div className='card  nft-card-4'>
                    <div className='nft-card'>
                        <div className='image'>
                            <img className='card-image4' alt='nft ' src={CardImage4}/>
                            <Heart/>


                        </div>
                        <div className='card-txt'>
                            <div className='left-txt'>
                                <span>Desert King</span>
                                <p>2345km away</p>
                            </div>
                            <div className='right-txt'>
                                <h3>1MBT per night</h3>
                                <p>available for 2weeks stay</p>
                            </div>
                        </div>
                        <div className='rating'>
                            <Stars/>
                        </div>
                    </div>
                
                </div>

                <div className='card  nft-card-5'>
                    <div className='nft-card'>
                        <div className='image'>
                            <img className='card-image5' alt='nft ' src={CardImage5}/>
                            <Heart/>


                        </div>
                        <div className='card-txt'>
                            <div className='left-txt'>
                                <span>Desert King</span>
                                <p>2345km away</p>
                            </div>
                            <div className='right-txt'>
                                <h3>1MBT per night</h3>
                                <p>available for 2weeks stay</p>
                            </div>
                        </div>
                        <div className='rating'>
                        <Stars/>
                        </div>
                
                    </div>
                    
                </div>

                <div className='card  nft-card-6'>
                    <div className='nft-card'>
                        <div className='image'>
                            <img className='card-image6' alt='nft ' src={CardImage6}/>
                            <Heart/>


                        </div>
                        <div className='card-txt'>
                            <div className='left-txt'>
                                <span>Desert King</span>
                                <p>2345km away</p>
                            </div>
                            <div className='right-txt'>
                                <h3>1MBT per night</h3>
                                <p>available for 2weeks stay</p>
                            </div>
                        </div>
                        <div className='rating'>
                        <Stars/>
                        </div>
                
                    </div>
                    
                </div>

                <div className='card nft-card-7'>
                    <div className='nft-card'>
                        <div className='image'>
                            <img className='card-image1' alt='nft ' src={CardImage7}/>
                            <Heart/>


                        </div>
                        <div className='card-txt'>
                            <div className='left-txt'>
                                <span>Desert King</span>
                                <p>2345km away</p>
                            </div>
                            <div className='right-txt'>
                                <h3>1MBT per night</h3>
                                <p>available for 2weeks stay</p>
                            </div>
                        </div>
                        <div className='rating'>
                        <Stars/>
                        </div>
                    </div>
                   
                </div>

                <div className='card nft-card-8'>
                    <div className='nft-card'>
                        <div className='image'>
                            <img className='card-image8' alt='nft ' src={CardImage8}/>
                            <Heart/>


                        </div>
                        <div className='card-txt'>
                            <div className='left-txt'>
                                <span>Desert King</span>
                                <p>2345km away</p>
                            </div>
                            <div className='right-txt'>
                                <h3>1MBT per night</h3>
                                <p>available for 2weeks stay</p>
                            </div>
                        </div>
                        <div className='rating'>
                            <Stars/>

                        </div>
                
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Nft