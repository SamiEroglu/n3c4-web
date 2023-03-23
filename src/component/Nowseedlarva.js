import React, { Component } from "react";
import "../styles/nowseedlarva.css";
import { Nowlogo, Seed, Ants } from "../icon";

export default class Nowseedlarva extends Component {
  render() {
    return (
      <div>
        <div className="nowseedlarva-container">
          <div className="now-kutu">
            <div className="nowseedlarva-enust-cont">
              <div className="n0wapp">n0w.app</div>{" "}
              <button className="freeforallbtn">FREE FOR ALL</button>
            </div>

            <Nowlogo></Nowlogo>
            <div className="now-baslik">
              <div className="now-baslik-now">NOW</div>
              <div>APP</div>
            </div>

            <div className="now-ikinci-yazi">web3 SOCIAL MEDIA DAPP</div>
            <div className="now-ucuncu-yazilar">
              <div>a video application aimed</div>
              <div>at increasing awareness</div>
              <div> of the present moment</div>
            </div>
            <button className="now-btn">HERE AND...</button>
          </div>
          <div className="seed-kutu">
            <div className="nowseedlarva-enust-contt">
              <div className="seed3">seed3foundation.xyz</div>
            </div>

            <Seed></Seed>
            <div className="seed-baslik">
              <div>SEED</div>
              <div>3.0</div>
            </div>

            <div className="seed-ikinci-yazi">ECO-NFT INITIATION </div>
            <div className="seed-ucuncu-yazilar">
              <div>A blockchain-based</div>
              <div>ecological system for</div>
              <div>the environment</div>
            </div>
            <button className="seed-btn">PLANT FUTURE</button>
          </div>
          <div className="larva-kutu">
            <div className="nowseedlarva-enust-contt">
              <div className="larvasys-io">larvasys.io</div>
            </div>
            <Ants></Ants>
            <div className="larva-baslik">
              <div>LARVA</div>
              <div>SYS</div>
            </div>

            <div className="larva-ikinci-yazi">$LARVA ECONOMY GAMIFICATION</div>
            <div className="larva-ucuncu-yazilar">
              <div>A play-to-earn initiative</div>
              <div>based on ants</div>
            </div>

            <button className="larva-btn">PLAY TO EARN</button>
          </div>
        </div>
      </div>
    );
  }
}
