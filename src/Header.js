import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='header_logo'>
                <a href='/'><img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOW2aoxIpSuVicA5RJ-xqD3D_IvUvxHYDMHQ&usqp=CAU" /></a>
                <div><strong>3CAPES</strong></div>
            </div>

            <div className='header_components'>
                <div>
                    <a href='/'>Home</a>
                </div>
                <div>
                    <a href='/services'>Services</a>
                </div>
                <div>
                    <a href='/contributors'>Contributors</a>
                </div>

            </div>
        </div>
    )
}

export default Header