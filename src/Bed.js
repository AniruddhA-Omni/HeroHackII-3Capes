import React, { useState } from 'react'
import axios from 'axios';
import './Blood_donation.css'
function Bed() {
    const [name, setName] = useState('');
    const [phn, setPhn] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const sendData = () => {
        axios.post('https://625bf44fc9e78a8cb9b1b7b8.mockapi.io/Bed', {
            name,
            phn,
            email,
            address
        })
    }
    return (
        <div className='bd_conatainer'>
            <div className='lr'>
                <div className='left_con'>
                    <div className='bd_container3'>
                        <label ><strong>Full Name</strong></label>
                        <input onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='bd_container3'>
                        <label><strong>Phone Number</strong></label>
                        <input onChange={(e) => setPhn(e.target.value)} />
                    </div>
                    <div className='bd_container3'>
                        <label ><strong>Email</strong></label>
                        <input onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='bd_container3'>
                        <label><strong>Address</strong></label>
                        <input onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <button className='btn' onClick={sendData} type='submit'>Submit</button>
                </div>
                <div className='right_con'>
                    <img src='https://thumbs.dreamstime.com/b/hotel-bed-sign-black-background-hotel-bed-sign-black-background-simple-vector-logo-163154018.jpg' />
                </div>
            </div>
        </div>
    )
}


export default Bed