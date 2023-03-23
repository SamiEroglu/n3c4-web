import { React, useEffect } from 'react';
import '../styles/futuree.css';
import { Loadinglogo, Twlogo2 } from '../icon';

export default function Futures(props) {
  useEffect(() => {
    const element = document.querySelector('.progress-value');
    const observer = new IntersectionObserver(entries => {
      element.classList.toggle('load', entries[0].isIntersecting);
      // observer.unobserve(element) // TEKRARLAMASINI ISTEMIYORSAN BURAYI EKLE AMA SORUNLU CALI
    });

    observer.observe(element);
  }, []);

  return (
    <div>
      <div className='future-container'>
        <div className='interactive-text'>An interactive Roadmap for building together with community</div>
        <div className='futures-text-container'><div className='futures-text'>FUTUREs</div><div id='hashtagweb3build'>#buildinPublic</div>
        </div>
        <div className='mavi-beyaz-kutu-container'>
          <div className="progress">
            <div className="progress-value">
              <div className="yuzde41">%41</div>
            </div>
            <Loadinglogo></Loadinglogo>
            <div className='progress-yazilar'>
              <div className='progress-yazilar-1'>LAST UPDATE</div>
              <div className='progress-yazilar-2'>Wordsmeta Deploy R8 UI Update on MP+</div>
            </div>
          </div>
        </div>
        <div className='mavibeyaz-alti-text-cont'>
          <div className='mavibeyaz-altindaki-text'>We are building with and for the community.
            Click to the loading bar above to see our public roadmap.
            <a href='2'>Send us your insights</a> participate in projects, have a role in the future Web 3.0 steps.</div>
          <div className='read-morebuton-cont'>
            <button className='read-more-btn'>READ MORE ABOUT ON <Twlogo2></Twlogo2></button>
          </div>
        </div>
        <div className='degenlabs-cont'>
          <div className='degenlabs'>
            DEGENLABS™
          </div>
          <div className='collab-call'>

            <button className='collab-btn'>COLLAB CALL</button>
            <div className='handful-cont'>
              <div className='handful-text1'>A handful of Web 3.0 services</div>
              <div className='handful-text'>by a multi-hand degen crew</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
