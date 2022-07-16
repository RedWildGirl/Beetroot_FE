import logo from '../../../images/logo.svg';

const Header = () => {
    return(
        <header className='header js-header'>
            
            <div className="container">
                
                <div className="logo-holder">
                    <a href="#" className="logo-link"><img className='logo' src={logo} alt="Productly Logo" width="185px"/></a>
                </div>

                <div className="nav-holder">

                    <nav className="nav">

                        <ul className="nav-list">
                            <li className="nav-item"><a href="#" className="nav-link">Product</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Customers</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Resources</a></li>
                        </ul>

                    </nav>

                    <ul className="btn-list">
                        <li className="btn-item"><a href="#" className="btn-white">Sign In</a></li>
                        <li className="btn-item"><a href="#" className="btn">Sign Up</a></li>
                    </ul>

                </div>

                <button className="nav-opener js-nav-opener">
                    <span></span>
                </button>

            </div>

        </header>
    );
}

export default Header;
