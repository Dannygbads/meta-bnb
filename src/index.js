import React, { useState } from 'react'
import ReactDOM  from 'react-dom'
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Header from './components/head';
import HeroSection from './components/hero';
import Nft from './components/nft';
import Learn from './components/learn';
import Footer from './components/footer';
import Place from './components/place-to-stay';
import './style/index.css'


function Page(){


    const[walletState,useWalletState]=useState('true')

   function ConnectWallet(){
        

   }
    
    return(
        <div className='main' data-Visible={walletState}>
            <Header/>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <div>
                            <HeroSection/>
                            <Nft/>
                            <Learn/>
                        </div>
                    } />
                    <Route path='/place-to-stay' element={<Place/>}></Route>

                </Routes>            
            
            </BrowserRouter>
            <Footer/>

        </div>
    )
}

ReactDOM.render(<Page/>,document.getElementById("root"))