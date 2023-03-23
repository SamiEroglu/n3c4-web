import React, { Component } from 'react';
import '../styles/newatelier.css';
import { Mpng4, Tablets } from '../icon';

export default class NewAtelier extends Component {
    render() {
        return (
            <div>
                <div className='atelier-container'>
                    <div className='atelier-yazi-container'>
                        <ul>
                            <div className='creative'>Creative Token Services for</div>
                            <div className='creative'> Solana and Ethereum Blockchains</div>
                            <div className='nft-atelier'>NFT.Atelier</div>
                            <div className='list-atelier'>
                                <li>RESEARCH & CONCEPT DEVELOPMENT</li>
                                <li>CREATIVE DIRECTION & EXECUTION</li>
                                <li>BRANDING & MARKETING ART-DIRECTION</li>
                                <li>SMART CONTRACT DEVELOPMENT</li>
                            </div>
                            <div className='atelier-button-cont'>
                                <button className='atelier-button'>MINT YOUR IDEA</button>
                                <div className='learn-more'>Learn more on </div>
                                <Mpng4></Mpng4>
                            </div>
                        </ul>
                    </div>
                    <div className='tablets-cont'><Tablets></Tablets></div>
                </div>
                <div className="m-scroll">
                    <div className="sliding-text">
                        <div>
                            <h1>
                                {'ALWAYS A WORK IN PROGRESS X ALWAYS ON X ALWAYS THE LATEST X ALWAYS A WORK ALWAYS A WORK IN PROGRESS X ALWAYS ON X ALWAYS THE LATEST X ALWAYS A WORK'}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
