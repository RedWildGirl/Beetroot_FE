import img1 from "../../../images/Image.svg";

const HeroSection = () => {
    return(
        <section className="hero-section">

        <div className="section-container">

            <div className="section-column">
                <img src={img1} alt="Happy people"/>
            </div>
            
            <div className="section-column">
                <h1 className="hero-title">The Design Thinking superpowers</h1>
                
                <div className="text-holder">
                    <p>Tools, tutorials, design and innovation experts, 
                        all in one place! The most intuitive way to imagine your next user experience.</p>
                </div>
            
                <ul className="hero-btn-list">
                    <li><a href="#" className="btn-xl">Get started</a></li>
                    <li><a href="#" className="video-link">Watch the video</a></li>
                </ul>
            </div>

        </div>
    </section>
    );
}

export default HeroSection;

