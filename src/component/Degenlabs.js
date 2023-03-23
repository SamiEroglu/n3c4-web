import { React } from 'react';
import '../styles/degenlabs.css';
import { Zincir, Legos, Cekiccivi, Mantar, Robotkol, Projectexamplesbtn, Learnmoreon, Iconetiket2 } from '../icon';

function Degenlabs() {


  const mouseMoveHandler = e => {
    for (const kutu of document.getElementsByClassName("labs-kutu-container")) {
      const rect = kutu.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      kutu.style.setProperty("--mouse-x", `${x}px`);
      kutu.style.setProperty("--mouse-y", `${y}px`);
    };
  }

  return (
    <div>
      <div className='labs-en-dis-cont' onMouseMove={mouseMoveHandler}>
        <div className='labs-kutu-container'>
          <div className='labs-ust-kutu'>
            {' '}
            <Zincir />
          </div>
          <div className='labs-orta-kutu'>
            Brands to Communities
            with Blockchain
          </div>
          <div className='labs-alt-kutu'>
            <div className='altkutu-yazi'>
              Maximizes the transparency of decentralized
              versions of social media accounts, account expansion and mass messaging.
            </div>
          </div>
          <div className='icon-etiket-learnmore'>
            <Iconetiket2></Iconetiket2><Learnmoreon></Learnmoreon>
          </div>

        </div>
        <div className='labs-kutu-container'>
          <div className='labs-ust-kutu'>
            {' '}
            <Cekiccivi />
          </div>
          <div className='labs-orta-kutu'>
            Brand Building
            for Web 3.0
          </div>
          <div className='labs-alt-kutu'>
            <div className='altkutu-yazi'>
              Allows business to easily employ web3 technology as a decentralized autonomous organization.

            </div>

          </div>
          <Projectexamplesbtn></Projectexamplesbtn>
        </div>
        <div className='labs-kutu-container'>
          <div className='labs-ust-kutu'>
            {' '}
            <Zincir />
          </div>
          <div className='labs-orta-kutu'>
            eSports and ProGaming
            Visual Identity
          </div>
          <div className='labs-alt-kutu'>
            <div className='altkutu-yazi'>
              Decentralized branding and research for professional e-sports teams.
            </div>
          </div>
          <Projectexamplesbtn></Projectexamplesbtn>
        </div>
        <div className='labs-kutu-container'>
          <div className='labs-ust-kutu'>
            {' '}
            <Legos></Legos>
          </div>
          <div className='labs-orta-kutu'>
            Web 3.0 Gamification and
            Play to Earn Features
          </div>
          <div className='labs-alt-kutu'>
            <div className='altkutu-yazi'>
              Redesignes advertising industry without compromising people's privacy in decentralized way.
            </div>
          </div>
          <Projectexamplesbtn></Projectexamplesbtn>
        </div>
        <div className='labs-kutu-container'>
          <div className='labs-ust-kutu'>
            {' '}
            <Mantar />
          </div>
          <div className='labs-orta-kutu'>
            Eco-Friendly & Efficient
            Smart Contracts
          </div>
          <div className='labs-alt-kutu'>
            <div className='altkutu-yazi'>
              Maximizes the transparency of decentralized
              versions of social media accounts, account expansion and mass messaging.
            </div>
          </div>
          <Projectexamplesbtn></Projectexamplesbtn>
        </div>
        <div className='labs-kutu-container'>
          <div className='labs-ust-kutu'>
            {' '}
            <Robotkol />
          </div>
          <div className='labs-orta-kutu'>
            Automation and AI-Powered Communitacations
          </div>
          <div className='labs-alt-kutu'>
            <div className='altkutu-yazi'>
              New generation decentralized utility bots make peace with the authority.
            </div>
          </div>
          <div className='icon-etiket-learnmore'>
            <Iconetiket2></Iconetiket2><Learnmoreon></Learnmoreon>
          </div>
        </div>

        <div className='m-scroll'>
          <div className='sliding-text'>
            <div>
              <h1>
                ALWAYS A WORK IN PROGRESS X ALWAYS ON X ALWAYS THE LATEST X ALWAYS A WORK ALWAYS
                A WORK IN PROGRESS X ALWAYS ON X ALWAYS THE LATEST X ALWAYS A WORK
              </h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Degenlabs;
