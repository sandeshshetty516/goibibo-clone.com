import React from "react";
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className='navbarItems'>
            <header className='navbar shadow-5'>
                <div className='appLogo flex'>
                    <h1><span className='title'>go</span>ibibo</h1>
                </div>
                    <div className='nav'>
                        <ul className='nav-items flex'>
                            <li className='state active'><span><i className="link active fas fa-plane"></i></span>Flight</li>
                            <li className='state'><span><i className="link fas fa-hotel"></i></span>Hotels</li>
                            <li className='state'><span><i className="link fas fa-train"></i></span>Trains</li>
                            <li className='state'><span><i className="link fas fa-car"></i></span>Cabs</li>
                            <li className='state'><span><i className="link fas fa-bus"></i></span>Bus</li>
                            
                        </ul>
                    </div>
                    <div className='container'>
                        <div className='trip'>
                            <span className='logo'><i className="fas fa-suitcase"></i></span>
                            <span>
                                <div>
                                    <p className='trip-1'>Manage Booking</p>
                                    <p className='trip-2'>My Trips</p>
                                </div>
                            </span>
                        </div>
                        <div className='login-tab'>
                            <span className='logo-2'><i className="fas fa-user-circle"></i></span>
                            <div>
                                <p className='font'>LOGIN OR SIGNUP</p>
                            </div>
                        </div>
                    </div>
            </header>
        </nav>
    )
}

export default Navbar;