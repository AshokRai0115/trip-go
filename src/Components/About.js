import './About.css';

function About() {
    return (
        <div className='about'>
            <div className="about-container">
                <div className='about-left'>
                    <img className='about-image' src='/images/about.jpg' alt='about'/>
                </div>
                <div className='about-right'>
                    <div className='heading-style'>
                    <div className='beginner'></div>
                    <h2 className="heading">Travel to Find your unknown self</h2>
                    </div>
                    <p className="content">Embark on a journey of discovery with our immersive travel experiences. From breathtaking landscapes to vibrant cultures, let our curated adventures create lasting memories. Explore the world with confidence, guided by our expert team, and unlock the extraordinary in every destination. Your next adventure awaits-start your unforgettable journey today.<br />
                        Travel for good. everything in the journey are lesson not regrets.</p>
                    <button className="read-more">read more</button>
                </div>
            </div>
        </div>
    )
}

export default About;