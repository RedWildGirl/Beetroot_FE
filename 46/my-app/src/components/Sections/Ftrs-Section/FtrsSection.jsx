import violIc from "../../../images/violet-icon.svg";
import yelIc from "../../../images/yellow-icon.svg";
import redIc from "../../../images/red-icon.svg";
import blueIc from "../../../images/blue-icon.svg";

const FtrsSection = () => {
    return(
        
        <section className="ftrs-section">

            <div className="container">

                <div className="title-holder">
                    <h2>We design tools to unveil your superpowers</h2>
                </div>

                <div className="ftrs-list">

                    <div className="ftrs-column">
                        <div className="icon-holder"><img className="ftrs-icon" src={violIc} alt="violet icon" class="icon-img"/></div>
                        <div className="title"><h3>First click tests</h3></div>
                        <div className="text"><p>While most people enjoy casino gambling</p></div>
                    </div>
            
                    <div className="ftrs-column">
                        <div className="icon-holder"><img className="ftrs-icon" src={yelIc} alt="yellow icon" class="icon-img"/></div>
                        <div className="title"><h3>Design surveys</h3></div>
                        <div className="text"><p>Sports betting, lottery and bingo playing for the fun</p></div>
                    </div>
            
                    <div className="ftrs-column">
                        <div className="icon-holder"><img className="ftrs-icon" src={redIc} alt="red icon" class="icon-img"/></div>
                        <div className="title"><h3>Preference tests</h3></div>
                        <div className="text"><p>The Myspace page defines the individual.</p></div>
                    </div>
            
                    <div className="ftrs-column">
                        <div className="icon-holder"><img className="ftrs-icon" src={blueIc} alt="blue icon" class="icon-img"/></div>
                        <div className="title"><h3>Five second tests</h3></div>
                        <div className="text"><p>Personal choices and the overall personality of the person. </p></div>
                    </div>

                </div>

                <div className="btn-holder">
                    <a href="#" className="btn-xl">SIGN UP NOW</a>
                </div>

            </div>

        </section>

    );
}

export default FtrsSection;
