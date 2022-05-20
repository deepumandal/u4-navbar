import React from "react";
import './nav.css'

let Nav = () =>{
    return (
        <div className='container flex justify'>
        <div className='innerdiv first flex justify'>
          <p>LOGOBACKERY</p>
        </div>
        <div className='innerdiv second flex justify'>
        <p>Service</p>
          <p>Project</p>
          <p>About</p>
        </div>
          
        <div className='innerdiv third flex justify'>
          <button className='Contact' >Contact</button>
        </div>
            </div>
    )
}

export default Nav