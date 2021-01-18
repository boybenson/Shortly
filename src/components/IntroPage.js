import React from 'react'
import '../styles/IntroPage.css'

function IntroPage() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="intro__writeup">
                        <h1>Building Softwares To Meet  Your Business Needs</h1>
                        <p>Building new software for your business, creating a mobile application to assist your contractors in the field, 
                        or building a web app to get your product to your customers</p>
                        <button>Get Started</button>
                    </div>
                    <div className="intro__image">
                        <img src="/images/illustration-working.svg" alt="illustration pics"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IntroPage
