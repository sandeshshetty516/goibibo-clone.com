import Carousel, { consts } from 'react-elastic-carousel';
import React from "react";
import './Offer.scss'
import { offerList } from './Offerlist';

const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <i className="fas fa-angle-left"></i> : <i className="fas fa-angle-right"></i>
    return (
            <button className='product-ArrowButton' onClick={onClick} disabled={isEdge}>
                {pointer}
            </button>
      
    )
}

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2},
    { width: 1000, itemsToShow: 3 }
]

const Offer =() => {
    return (
        <div style={{width: '100%', background: "#f2f2f2"}}>
            <div className='offerContainer'>
                <div className='offer shadow-1-l'>
                    <ul className='list flex'>
                        <li className='offers'>Offers</li>
                        <li className='products' role='presentation'><a href='#products' style={{color: '#111'}}>Products</a></li>
                    </ul>
                    <div className='pr2 pl2 pt3'>
                        <div className='offersInStore pl4 tc pb2'>Offers in store for you</div>
                        <div className='viewAll pb2 pl4 tc'>View all live offers for your flight booking</div>
                        <div className='w-100 pt1 pb1'>
                            <Carousel breakPoints={breakPoints} renderArrow={myArrow} itemPadding={[10, 30]} pagination={false}>
                                {offerList.map((item,index) => {
                                    return (
                                        <div key={index}>
                                            <div className='br3 tc shadow-1'style={{height:'auto'}}>
                                                <img className='br3 br--top' style={{width: '99.5%'}} src={item.imgSrc} alt='offer'/>
                                                <div className='valid-till'>
                                                    <p className='offer-details'>{item.text}</p>
                                                </div>
                                                <div className='valid-till'>
                                                    <p className='valid-offer'>Valid till:{item.valid}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Carousel>
                        </div>
                        <div className='tc'>
                            <button className='offerButton shadow-1'>
                                EXPLORE ALL OFFERS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer;