import React, { Component } from 'react';
import '../styles/newikincihead.css';
import { Ikinciheader3dsekil, Twlogo3, Mpng2 } from '../icon';

export default class Newikincihead extends Component {
    render() {
        return (
            <div>
                <div className='new-ikinci-head-container'>
                    <div className='newcraft-ikinci-head-ilk-yazi'>

                        <div className='ikincihead-ilkyazi'>n3c4 is the Web 3.0 INITIATION  OFFERS YOU for all degen services below & aside for the future and forward.</div>
                        <div className='read-more'>READ MORE ABOUT US ON <Twlogo3></Twlogo3><Mpng2></Mpng2></div>
                    </div>
                    <div className='new-ikinci-head-turuncu'>
                        <div className='ikincihead-3dsekil'>
                            <Ikinciheader3dsekil></Ikinciheader3dsekil>
                        </div>

                    </div>

                </div>
                <div className="m-scrolll">
                    <div className="sliding-text">
                        <div>
                            <h1>
                                {'n3wcr4ft > BUILDS FUTURE > n3wcr4ft > BUILDS WITH COMMUNITY n3wcr4ft > BUILDS FUTURE > n3wcr4ft > BUILDS WITH COMMUNITY'}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
