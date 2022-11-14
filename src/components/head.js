import React, { useState } from 'react'
import ReactDOM  from 'react-dom'
import Logo from '../Group.png'
import'../style/head.css'
import HeroSection from './hero'
import MetaMaskIcon from '../metamask-icon.png'
import WalletConnect from '../walletconnect-icon.png'





function Header(props){
    const[menuState, setMenuState] = useState('false')
    const[menuClass, setMenuClass] = useState('menu')
    const[closeState,setCloseState]= useState('menu-close-hide')
    const[connectState,setConnectState]= useState('false')
    const[walletState,setWalletState]=useState('false')

    function ShowMenu(){
        if(menuState==='false'){
            setMenuState('true')
            setCloseState('menu-close')
            setMenuClass('menu-hide')
        }else if(menuState==='true'){
            setMenuState('false')
            setCloseState('menu-close')


        }
    }

    function MenuClose(){
        if(menuState==='true'){
            setMenuState('false')
            setCloseState('menu-close-hide')
            setMenuClass('menu')



        }else if(menuState==='false'){
            setMenuState('true')

        }
    }
    function ConnectWallet(){
    
        if(walletState==='false' || menuState==='true'){
            setWalletState('true')
            setMenuState('false')
            setCloseState('menu-close-hide')
            setMenuClass('menu')



        }else if (walletState==='true' || menuState==='false'){
            setWalletState('false')
            setCloseState('menu-close-hide')


        }

        
        console.log('clicked')
        return walletState
    }
    console.log(walletState)

   

    return(
        <header>
           <nav>
                <div className='logo'>
                    <img  id='logo' alt='meta bnb' src={Logo}/>
                </div>
                <svg onClick={ShowMenu} className={menuClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>

                <svg onClick={MenuClose} className={closeState} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
                <div data-Visible={menuState} className='nav-link-default'>
                <ul>
                    <li className='home'><a href='/'>Home</a></li>
                    <li className='pts'><a href='/place-to-stay'>Place to stay</a></li>
                    <li className='nftlink'><a href='#'>NFTs</a></li>
                    <li className='comm'><a href='#'>Community</a></li>
                </ul>
                <button onClick={ConnectWallet} data-Visible={connectState} ><span>Connect Wallet</span></button>
                </div>
               
           </nav>

           <div className='connect-wallet' data-Visible={walletState}>
                <div className='cw'>
                    <div className='top'>
                        <span>Connect Wallet</span>

                        {/* close svg */}
                            <svg onClick={ConnectWallet} className='cwx' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6 6L18 18" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                    </div>
                    <div className='body'>
                        <span>choose your preferred wallet:</span>

                        <div className='metamask'>
                            <div className='walletname'>
                                <img className='metamask-icon' alt='metamask' src={MetaMaskIcon}/>
                                <b>Metamask</b>
                            </div>
                            {/* arrow svg */}
                            <svg className='cw-arrow' width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.38381 8.00009C9.38381 8.26892 9.28117 8.53771 9.07631 8.74267L2.62657 15.1923C2.21628 15.6026 1.55108 15.6026 1.14096 15.1923C0.730845 14.7822 0.730845 14.1172 1.14096 13.7068L6.84805 8.00009L1.14116 2.2933C0.731043 1.88301 0.731043 1.21801 1.14116 0.807924C1.55128 0.397442 2.21648 0.397442 2.62677 0.807924L9.07651 7.2575C9.2814 7.46256 9.38381 7.73135 9.38381 8.00009Z" fill="#959DA6"/>
                            </svg>


                        </div>

                        <div className='walletconnect'>
                            <div className='walletname'>

                            <img className='walletconnect-icon' alt='wallet connect' src={WalletConnect}/>
                                <b>WalletConnect</b>
                            </div>
                            {/* arrow svg */}
                            <svg className='cw-arrow' width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.38381 8.00009C9.38381 8.26892 9.28117 8.53771 9.07631 8.74267L2.62657 15.1923C2.21628 15.6026 1.55108 15.6026 1.14096 15.1923C0.730845 14.7822 0.730845 14.1172 1.14096 13.7068L6.84805 8.00009L1.14116 2.2933C0.731043 1.88301 0.731043 1.21801 1.14116 0.807924C1.55128 0.397442 2.21648 0.397442 2.62677 0.807924L9.07651 7.2575C9.2814 7.46256 9.38381 7.73135 9.38381 8.00009Z" fill="#959DA6"/>
                            </svg>


                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header 


 
