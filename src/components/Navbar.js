import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <>
            <div className="container">
                <nav>
                    <ul>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                        <hr/>
                        <li>Login</li>
                        <li className='signup'>Signup</li>
                    </ul>
                </nav>
            </div>   
        </>
    )
}

export default Navbar
