import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';

import '../styles/Footer.css'

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer__brand">
                        <div className="footer__header">
                            <h2>Shortly</h2>
                        </div>
                    </div>
                    <div className="footer__features">
                        <div className="footer__header">
                            <h4>Features</h4>
                        </div>
                        <ul>
                            <li>Software Development</li>
                            <li>Database Management</li>
                            <li>Cyber Security</li>
                            <li>Data Science</li>
                        </ul>
                    </div>
                    <div className="footer__resources">
                        <div className="footer__header">
                            <h4>Resources</h4>
                        </div>
                        <ul>
                            <li>Blog</li>
                            <li>Developers</li>
                            <li>24/7 Support</li>
                        </ul>
                    </div>
                    <div className="footer__company">
                        <div className="footer__header">
                            <h4>Company</h4>
                        </div>
                        <ul>
                            <li>About</li>
                            <li>Our Team</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="footer__company">
                        <div className="footer__socials">
                            <FacebookIcon/>
                            <TwitterIcon/>
                            <PinterestIcon/>
                            <InstagramIcon/>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
