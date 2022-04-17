import React from 'react'
import './Container.css'
function Container() {
  return (
    <div className='container'>
        <div className='left_container'>
          <strong style={{fontSize : 40, marginBottom : 25}}>Welcome to 3CAPES</strong> 
          <div style={{fontSize : 20, display: 'flex' , justifyContent : 'center',alignContent:'center'}}>Who are we as human beings if we ignore the suffering of others?</div>
          <p><strong>Click the button down below to avail our services</strong></p>
          <button className='btn'><a className='cona' href='/services'>Check our Services</a></button>
        </div>
        <div className='right_container'>
          <img src='https://freesvg.org/img/Hand-In-Hand.png'/>
        </div>
    </div>
  )
}

export default Container