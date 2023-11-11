import Navbar from "./Navbar";
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-top">
                    <div className="top-left">
                        <img className="logo" src="/images/logo.png" alt='logo' />
                        <p className="logo-name">TripGO</p>
                    </div>
                    <div className="top-right"><Navbar />
                        <button className="signup">Sign Up</button></div>
                </div>
                <h1>Travel to explore new</h1>
            </div>
        </div>
    )
}

export default Header;