import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <h2 className="footer-text">Your <span className='highlight'>next</span> destination</h2>
                <div className="social-media">
                    <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffff", width: "30px", height: "30px" }} />
                    <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffff", width: "30px", height: "30px" }} />
                    <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffff", width: "30px", height: "30px" }} />
                </div>
            </div>
        </div>
    )
}

export default Footer