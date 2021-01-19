import React from 'react'
import '../styles/Services.css'
import one from '../images/icon-brand-recognition.svg' 
import two from '../images/icon-detailed-records.svg' 
import three from '../images/icon-fully-customizable.svg' 

function Services() {
    return (
        <>
            <div className="services">
                <div className="container">
                    <h1>Services We Offer</h1>
                    <div className="items__container">

                        <div className="service">
                            <img src={one} alt=""/>
                            <h3>Database Designing</h3>
                            <p>Building Highly professional and scalable softwares to meet your business needs</p>
                        </div>

                        <div className="service">
                            <img src={two} alt=""/>
                            <h3>Software Development</h3>
                            <p>Building Highly professional and scalable softwares to meet your business needs</p>
                        </div>

                        <div className="service">
                            <img src={three} alt=""/>
                            <h3>Software Development</h3>
                            <p>Building Highly professional and scalable softwares to meet your business needs</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
