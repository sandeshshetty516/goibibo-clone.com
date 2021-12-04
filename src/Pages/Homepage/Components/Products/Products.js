import Carousel, { consts } from 'react-elastic-carousel';
import React from "react";
import './Products.scss'
import { productsList } from './Productslist';

const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <i className="fas fa-angle-left"></i> : <i className="fas fa-angle-right"></i>
    return (
            <button className='arrowButton' onClick={onClick} disabled={isEdge}>
                {pointer}
            </button>
      
    )
}

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2},
    { width: 850, itemsToShow: 3 }
]

const Products = () => {
    return (
        <div id='products' style={{width: '100%', backgroundImage: 'linear-gradient(to top, #195eb7, #2276e3)'}}>
            <div className='pt4 pb4'>
                <div className='newOnGoibibo tc pb3'>What's new on Goibibo Flights?</div>
                <div className='seeWhy tc'>See why India loves to book flights with us</div>
            </div>
            <div className='pb2 flex' style={{width:'100%', justifyContent:'center'}}>
                <div style={{width: '80%', justifyContent: 'center'}}>
                    <Carousel breakPoints={breakPoints} renderArrow={myArrow} itemPadding={[10, 20]} pagination={false}>
                        {productsList.map((item,index) => {
                            return (
                                <div className='br3 tc pb5' key={index} style={{backgroundColor: '#fff', width: '300px'}}>
                                    <h2 className='product-title tc pt3 pb1'>{item.title}</h2>
                                    <div className='products-image'>
                                        <img className='br4 shadow-1' src={item.img} style={{width: '97%'}} alt='products'/>
                                        <div className='image-content'>
                                            <div className='context-title'>
                                                {item.title}
                                            </div>
                                            <h2 className='context'>
                                                {item.content}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
            <div className='tc'>
                <button className='productButton shadow-1'>
                    VIEW ALL PRODUCTS
                </button>
            </div>
        </div>
    )
}

export default Products;