import React, { Component } from 'react';
import { FooterIm, N3c4kim, Bgclogo1 } from '../icon';
import '../styles/newft.css';

export default class Newft extends Component {
    render() {
        return (
            <div>
                <div className='Footerim-Container'>
                    <FooterIm></FooterIm>
                </div>
                <div className='Footer-Container'>
                    <div className='Footer-bir'>
                        <div className='footer-bir-terms-cont'>
                            <div className='Termsnconditions'>
                                TERMS & CONDITIONS
                            </div>

                            <div className='Lorem'>

                            </div>
                        </div>
                    </div>
                    <div className='Footer-iki'>
                        <div className='footeriki-wbsn'>
                            {/*<div className='Wordsmeta'>
                                <a style={{ color: 'white' }} href="https://wordsmeta.xyz/" target={'blank'}>
                                    wordsmeta.xyz
                                </a>
                            </div>
                            <div className='Blocknote'>
                                <a style={{ color: 'white' }} href="https://wordsmeta.xyz/" target={'blank'}>
                                    blocknote.network
                                </a>
                            </div>
                            <div className='Seed'>
                                <a style={{ color: 'white' }} href="https://wordsmeta.xyz/" target={'blank'}>
                                    seed3.xyz
                                </a>
                            </div>
                            <div className='Now'>
                                <a style={{ color: 'white' }} href="https://wordsmeta.xyz/" target={'blank'}>
                                    n0w.app
                                </a>
                            </div>*/}
                            <div className='cc0'>"CC0</div>
                        </div>

                    </div>
                    <div className='Footer-uc'>

                        <div className='footermenu'>
                            BEHANCE
                        </div>
                        <div className='footermenu'>
                            MEDIUM
                        </div>
                        <div className='footermenu'>
                            TWITTER
                        </div>

                    </div>
                </div>
                <div className='en-alt-cont'>
                    <div className='enalttakifooter'>
                        <div >
                            <N3c4kim></N3c4kim>
                        </div>
                        <div className='LLF'>
                            Love, Logic, Future © 2023
                        </div>
                    </div>
                    <div className='en-alt-sag'>

                        <div className='bgc-div'><Bgclogo1></Bgclogo1></div>
                    </div>
                </div>
            </div>
        );
    }
}
