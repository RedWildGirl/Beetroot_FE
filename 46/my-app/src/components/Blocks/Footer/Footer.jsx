import logo from '../../../images/logo.svg';

const Footer = () => {
    return(
        
        <footer className="footer">

            <div class="container">
            
                <div className="footer-holder">

                    <div className="logo-holder">
                        <a href="#"><img src={logo} alt="Productly Logo"/></a>
                    </div>

                    <div className="links-holder">

                        <div className="footer-column quick-links">
                            <ul className="quick-links-list">
                                <li className="quick-links-item"><a href="#">About Us</a></li>
                                <li className="quick-links-item"><a href="#">Blog</a></li>
                                <li className="quick-links-item"><a href="#">Contact</a></li>
                                <li className="quick-links-item"><a href="#">FAQ</a></li>
                            </ul>
                        </div>

                        <div className="footer-column legal-stuff">
                            <ul className="legal-stuff-list">
                                <li className="legal-stuff-item"><a href="#">Disclaimer</a></li>
                                <li className="legal-stuff-item"><a href="#">Financing</a></li>
                                <li className="legal-stuff-item"><a href="#">Privacy Policy</a></li>
                                <li className="legal-stuff-item"><a href="#">Terms of Service</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="contact-us">
                        <div className="contact-holder"><input className="sign-up" type="text"/></div>
                        <div className="contact-btn-holder"><a href="#" className="btn btn-sign">Sign up Now</a></div>
                    </div>

                </div>
            
            </div>

        </footer>

    );
}

export default Footer;
