import React from "react";
import './Footer.scss'
import { ourProducts, aboutUs, travelEssentials, moreLinks, popularFlight, topRoutes, topSector, popularDomestic, newUdaan, trendingHotels, trendingDomestic, importantRoutes, trendingResorts } from './Footerlist'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-links'>
                    <ul>
                        <li>Our Produts</li>
                        {ourProducts.map((item,index)=> {
                            return (
                                <li key={index}>
                                    <a href={item.href}>{item.products}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <ul>
                        <li>About Us</li>
                        {aboutUs.map((item,index)=> {
                            return (
                                <li key={index}>
                                    <a href={item.href}>{item.products}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <ul>
                        <li>Travel Essentials</li>
                        {travelEssentials.map((item,index)=> {
                            return (
                                <li key={index}>
                                    <a href={item.href}>{item.products}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <ul>
                        <li>More Links</li>
                        {moreLinks.map((item,index)=> {
                            return (
                                <li key={index}>
                                    <a href={item.href}>{item.products}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='footer-routes'>
                    <div>
                        <ul>
                            <li>Popular Flights</li>
                            {popularFlight.map((item,index)=> {
                                return (
                                    <li key={index}>
                                        <a href={item.href}>{item.route}</a>
                                    </li>
                                )
                            })}
                        </ul>
                        <ul>
                            <li>Top Routes</li>
                            {topRoutes.map((item,index)=> {
                                return (
                                    <li key={index}>
                                        <a href={item.href}>{item.route}</a>
                                    </li>
                                )
                            })}
                        </ul>
                        <ul>
                            <li>Popoular Domestic Routes</li>
                            {popularDomestic.map((item,index)=> {
                                return (
                                    <li key={index}>
                                        <a href={item.href}>{item.route}</a>
                                    </li>
                                )
                            })}
                        </ul>
                        <ul>
                            <li>Top Sectors</li>
                            {topSector.map((item,index)=> {
                                return (
                                    <li key={index}>
                                        <a href={item.href}>{item.route}</a>
                                    </li>
                                )
                            })}
                        </ul>
                        <ul>
                            <li>Important Routes</li>
                            {importantRoutes.map((item,index)=> {
                                return (
                                    <li key={index}>
                                        <a href={item.href}>{item.route}</a>
                                    </li>
                                )
                            })}
                        </ul>
                        <ul>
                            <li>Trending Domestic Routes</li>
                            {trendingDomestic.map((item,index)=> {
                                return (
                                    <li key={index}>
                                        <a href={item.href}>{item.route}</a>
                                    </li>
                                )
                            })}
                        </ul>
                        <ul>
                            <li>New Udaan Sectors</li>
                            {newUdaan.map((item,index)=> {
                                return (
                                    <li key={index}>
                                        <a href={item.href}>{item.route}</a>
                                    </li>
                                )
                            })}
                        </ul>
                        <ul>
                            <li>Trending Hotel Cities</li>
                            {trendingHotels.map((item,index)=> {
                                return (
                                    <li key={index}>
                                        <a href={item.href}>{item.route}</a>
                                    </li>
                                )
                            })}
                        </ul>
                        <ul>
                            <li>Trending Resort Cities</li>
                            {trendingResorts.map((item,index)=> {
                                return (
                                    <li key={index}>
                                        <a href={item.href}>{item.route}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className='footer-apps'>
                    <div className='apps follow us'>
                        <p style={{fontSize: '14px', fontWeight: '700'}}>Follow Us</p>
                        <div className='social-sites'>
                            <a href='/'><i style={{color:'#b3b3b3', fontSize:'25px', paddingRight: '10px'}} className="fab fa-facebook-square"></i></a>
                            <a href='/'><i style={{color:'#b3b3b3', fontSize:'25px', paddingRight: '10px'}} className="fab fa-twitter"></i></a>
                            <a href='/'><i style={{color:'#b3b3b3', fontSize:'25px'}} className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className='apps follow us'>
                        <p style={{fontSize: '14px', fontWeight: '700'}}>Book Tickets faster. Download our mobile Apps</p>
                        <div>
                            <span className='store'>
                                <img src='https://miro.medium.com/max/1200/1*OIIv4FEjJQMqh-zEPhtlYA.png' alt='playStore' />
                                <img src='https://miro.medium.com/max/1200/1*V9-OPWpauGEi-JMp05RC_A.png' alt='appStore' />
                            </span>
                        </div>
                    </div>
                    <div className='apps payment'>
                        <span><img src='https://digital-himalaya.com/wp-content/uploads/2017/05/verisign-secured.jpg' alt='verified' /></span>
                        <span><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png' alt='American Express' /></span>
                        <span><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png' alt='Master Card' /></span>
                        <span><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png' alt='Visa' /></span>
                        <span><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/1200px-RuPay.svg.png' alt='Rupay' /></span>
                        <span><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/IATAlogo.svg/1200px-IATAlogo.svg.png' alt='IATA' /></span>
                    </div>
                </div>
                <div className='footer-end'>
                    <div className='brands'>
                        <a href='/'><span><img src='https://www.bitrefill.com/content/cn/b_rgb%3AFFFFFF%2Cc_pad%2Ch_600%2Cw_1200/v1556818942/makemytrip.jpg' alt='makeMyTrip' /></span></a>
                        <a href='/'><span><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Redbus_logo.jpg/1200px-Redbus_logo.jpg' alt='redBus' /></span></a>
                        <span className='copyrights'>© 2021 ibibogroup All rights reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;