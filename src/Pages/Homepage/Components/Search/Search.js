import React from "react";
import './Search.scss'

const Search = () => {
    return (
        <div className='widget'>
            <div className='pageBgBlue'></div>
            <div className='pageBgLight'></div>
            <div className='booking'>
                <h1 className='heading'>Domestic and International Flights</h1>
                <div className='trip-nav'>
                    <div className='contain shadow-1-l'>
                        <span id='oneway' className='type'>One way</span>
                        <span id='roundtrip' className='type'>Round trip</span>
                        <span id='multicity' className='type'>Multicity</span>
                    </div>
                </div>
                <div>
                    <div className='content'>
                        <div>
                        <div className='search-widget'>
                            <div className='enter'>
                                <div className='input-entry shadow-1-l'>
                                    <div className='input'>
                                        <input type='text' placeholder='From'/>
                                    </div>
                                    <div className='input'>
                                        <input type='text' placeholder='Destination'/>
                                    </div>
                                    <div className='input'>
                                        <input type='text' placeholder='Departure'/>
                                    </div>
                                    <div className='input'>
                                        <input type='text' placeholder='Return'/>
                                    </div>
                                    <div className='input'>
                                        <input type='text' placeholder='1 Traveller, Economy'/>
                                    </div>
                                </div>
                            </div>
                            <div className='button'>
                                <button className='search-button shadow-1-l'>SEARCH</button>
                            </div>
                        </div>
                        </div>
                        <div className='checkbox-container'>
                            <div className='checkbox'>
                                <div className='checkbox-wraper'>
                                    <input className='checkbox-input' id='student-fare' type='checkbox' />
                                    <label className='checkbox-label' htmlFor='student-fare'><span>Student Fare</span></label>
                                </div>
                                <div className='checkbox-wraper'>
                                    <input className='checkbox-input' id='defence-fare' type='checkbox' />
                                    <label className='checkbox-label' htmlFor='defence-fare'><span>Defence Fare</span></label>
                                </div>
                                <div className='checkbox-wraper'>
                                    <input className='checkbox-input' id='senior-fare' type='checkbox' />
                                    <label className='checkbox-label' htmlFor='senior-fare'><span>Senior Citizen Fare</span></label>
                                </div>
                                <div className='checkbox-wraper'>
                                    <input className='checkbox-input' id='extra-seat' type='checkbox' />
                                    <label className='checkbox-label' htmlFor='extra-seat'><span>Show Extra Seat Option</span></label>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '100%', float: 'left'}}>
                            <div className='aad'>
                                <img src='https://mmt.servedbyadbutler.com/getad.img/;libID=3279520' alt='advertisement'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;