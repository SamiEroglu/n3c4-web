import React, { Component } from 'react';
import '../styles/wordmetablock.css';
import { Wmeta, Blocknot, Twlogo1, Mpng1, Mpng3 } from '../icon';

export default class Wordsmetablocknote extends Component {
  render() {
    return (
      <div className='wordblock-container'>

        <div className='wordskutu'>
          <div className='wordmeta-xyz-cont'> <div className='wordsmeta-xyz-enust-yazi'>wordmeta.xyz</div></div>

          <Wmeta></Wmeta>
          <div className='wordsmetabuyukyazi'>
            <div>WORDSMETA</div>
          </div>
          <div className='wordsmeta-metin'>
            THE Web 3.0 dictionarY.
            A COMMUNITY MADE, decentralized
            word exchange PLATFORM.
          </div>
          <div className='mint-cont'>
            <button className='mint-button'>MINT A WORD</button> <Twlogo1></Twlogo1> <Mpng1></Mpng1>
          </div>
        </div>

        <div className='blocknotekutu'>
          <div className='wordmeta-xyz-cont'> <div className='blocknote-xyz-enust-yazi'>blocknote.network</div></div>
          <Blocknot></Blocknot>
          <div className='blocknotebuyukyazi'>
            <div>BLOCKNOTE</div>
          </div>
          <div className='blocknote-metin'>
            <div>A DIGITAL TOWN-SQUARE</div>
            <div>ON BLOCKchaın. DECENTRALIZED,</div>
            <div> TRANSPARENT AND FAIR</div>
          </div>
          <div className='mint-cont'>
            <button className='join-button'>JOIN TO DIALOG</button><Mpng3></Mpng3>
          </div>

        </div>

      </div>

    );
  }
}
