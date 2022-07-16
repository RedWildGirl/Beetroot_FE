import redTS from '../../../images/red-tshirt.svg';
import blueTS from '../../../images/blue-tshirt.svg';
import yelTS from '../../../images/yellow-tshirt.svg';

const DesignSection = () => {
    return(
        
        <>
        
            <section className="design-section">

                <div className="section-container">

                    <div className="section-column"><img src={redTS} alt="image description" className="red-img"/></div>

                    <div className="section-column">

                        <p className="pseudo-title">Effortless Validation for</p>

                        <h3 className="title">Design Professionals</h3>

                        <p className="text">The Myspace page defines the individual, his or her characteristics, traits, 
                            personal choices and the overall personality of the person.</p>
                        
                        <ul className="column-list">

                            <li className="column-item">
                                <strong>Accessory makers</strong>
                                <p className="text">While most people enjoy casino gambling, sports betting, 
                                    lottery and bingo playing for the fun</p>
                            </li>

                            <li className="column-item">
                                <strong>Alterationists</strong>
                                <p className="text">If you are looking for a new way to promote your business 
                                    that won’t cost you more money,</p>
                            </li>

                            <li className="column-item">
                                <strong>Custom Design designers</strong>
                                <p className="text">If you are looking for a new way to promote your business 
                                    that won’t cost you more money,</p>
                            </li>

                        </ul>

                    </div>

                </div>

            </section>

            <section className="design-section">

                <div className="section-container reverse">

                    <div className="section-column"><img src={blueTS} alt="image description" className="blue-img"/></div>

                    <div className="section-column">

                        <p className="pseudo-title">Easier decision making for</p>

                        <h3 className="title">Product Managers</h3>

                        <p className="text">The Myspace page defines the individual, his or her characteristics, 
                            traits, personal choices and the overall personality of the person. </p>
                        
                        <ul className="column-list product-column">

                            <li className="column-item">
                                <p className="text">Never worry about overpaying for your energy again.</p>
                            </li>

                            <li className="column-item">
                                <p className="text">We will only switch you to energy companies that we trust and will treat you right</p>
                            </li>

                            <li className="column-item">
                                <p className="text">We track the markets daily and know where the savings are.</p>
                            </li>

                        </ul>

                    </div>

                </div>

            </section>

            <section className="design-section">

                <div className="section-container">

                    <div className="section-column"><img src={yelTS} alt="image description" className="yellow-img"/></div>

                    <div className="section-column">

                        <p className="pseudo-title">Optimisation for</p>

                        <h3 className="title">Marketers</h3>

                        <p className="text">Few would argue that, despite the advancements of feminism over the past three decades, 
                            women still face a double standard when it comes to their behavior. </p>
                        
                        <ul className="column-list">

                            <li className="column-item">
                                <strong>Accessory makers</strong>
                                <p className="text">While most people enjoy casino gambling, sports betting, 
                                    lottery and bingo playing for the fun</p>
                            </li>

                            <li className="column-item">
                                <strong>Alterationists</strong>
                                <p className="text">If you are looking for a new way to promote your business 
                                    that won’t cost you more money,</p>
                            </li>

                            <li className="column-item">
                                <strong>Custom Design designers</strong>
                                <p className="text">If you are looking for a new way to promote your business 
                                    that won’t cost you more money,</p>
                            </li>

                        </ul>

                    </div>

                </div>

            </section>

        </>

    );
}

export default DesignSection;
