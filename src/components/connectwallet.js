import React, { forwardRef, useState,useImperativeHandle } from 'react'
import ReactDOM  from 'react-dom'


const ComponentOne = forwardRef((props,ref) =>{
    useImperativeHandle(ref,()=>({
        ConnectWallet(){
           console.log('clicked')
          
       }
    }))
    return(
        <div></div>
    )
})

export default ComponentOne

