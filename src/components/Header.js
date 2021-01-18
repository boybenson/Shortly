import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import '../styles/Header.css'

function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="header__left">
                        <div className="header__logo">
                            <img src="/images/logo.svg" alt="logo"/>
                        </div>
                        <div className="header__left__links">
                            <a href="/">Features</a>
                            <a href="/">Pricing</a>
                            <a href="/">Resources</a>
                        </div>
                    </div>

                    <div className="header__right">
                        <div className="aut__links">
                            <a href="/">Login</a>
                            <a href="/" className='sign__up__button'>Signup</a>
                        </div>
                        <div className="menu__bar">
                            <MenuIcon fontSize='large' color='action'/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
