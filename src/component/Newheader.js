import '../styles/header.css';
import React, { Component } from 'react';
import { Newcraftheaderyazi, Anahtar, Newcraftheaderyaziiki } from '../icon';
export default class Newheader extends Component {
  render() {
    return (
      <div className='header-container'>
        <div className='newmenu-container'>
          <div className='menu'>
            <div id='ensolmenu'>n3c4_deploy.01</div>
            <div className='sag-grup'>
              <a href='1' ><div className='behance-btn'>BEHANCE</div></a>
              <a href='1'><div className='medium-btn'>MEDIUM</div></a>
              <a href='1'><div className='twitter-btn'>TWITTER</div></a>
            </div>
          </div>
        </div>
        <div className='newheader-container'>
          <div className='newcraft-header-yazi'>
            <Newcraftheaderyazi></Newcraftheaderyazi>
          </div>
          <div className='anahtar-header'>
            <Anahtar></Anahtar>
          </div>
          <div className='newcraft-header-ikinci-yazi'>
            <Newcraftheaderyaziiki></Newcraftheaderyaziiki>
          </div>
        </div>
      </div>
    );
  }
}
