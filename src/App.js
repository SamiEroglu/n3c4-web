import React from "react";
import "./App.css";
import Newheader from "./component/Newheader";
import Newikincihead from "./component/Newikincihead";
import Wordsmetablocknote from "./component/Wordsmetablocknote";
import NewAtelier from "./component/NewAtelier";
import Futures from "./component/Futures";
import Degenlabs from "./component/Degenlabs";
import Nowseedlarva from "./component/Nowseedlarva";
import Collapsible from "./component/Collapsible";
import Newft from "./component/Newft";
import Avatar from "./component/Avatar";
import ScrollButton from "./component/ScrollButton";
import {
  Mavibeyazkutu,
  Cnt0,
  Cnt1,
  Cnt2,
  Cnt3,
  Berkavatar,
  Ilgazavatar,
  Services,
  Iconbaglanti,
  Iconetiket,
  Kaydetico,
} from "./icon";
import cpuImage from "./img/cpu.png";

function App() {
  return (
    <div className="App">
      <Newheader />
      <Newikincihead />
      <Wordsmetablocknote />
      <NewAtelier />
      <Futures />
      <Degenlabs />
      <Nowseedlarva />
      <div
        style={{ backgroundImage: `url(${cpuImage})` }}
        className="collapsible-container"
      >
        <Services />
        <Collapsible
          icon={<Mavibeyazkutu />}
          title="n3C4 WEB 3.0 COMMUNITY-LIBRARY"
          btn={<button className="button-bir">FREE FOR ALL</button>}
        >
          <p>
            I am going to assume that you know the basics like how a component
            works, how useState works, and how to set up React. I will only
            focus on building the project and though this is for an absolute
            beginner who would like to know how useEffect and useRef work.
          </p>
        </Collapsible>
        <Collapsible
          icon={<Cnt2 />}
          title="create a unique cryptocurrency"
          btn={<div className="fiveweeks">+5 WEEKS / PAID</div>}
          ico={<Iconbaglanti />}
        >
          <p>
            I am going to assume that you know the basics like how a component
            works, how useState works, and how to set up React. I will only
            focus on building the project and though this is for an absolute
            beginner who would like to know how useEffect and useRef work.
          </p>
        </Collapsible>
        <Collapsible
          icon={<Cnt2 />}
          title="Creating and marketing on NFTs"
          btn={<button className="button-iki">COLAB OPEN</button>}
          ico={<Iconetiket />}
        >
          <p>
            I am going to assume that you know the basics like how a component
            works, how useState works, and how to set up React. I will only
            focus on building the project and though this is for an absolute
            beginner who would like to know how useEffect and useRef work.
          </p>
        </Collapsible>
        <Collapsible
          icon={<Cnt2 />}
          title="Marketplaces for Non-fungible Tokens"
          btn={<button className="button-iki">COLAB OPEN</button>}
          ico={<Iconetiket />}
        >
          <p>
            I am going to assume that you know the basics like how a component
            works, how useState works, and how to set up React. I will only
            focus on building the project and though this is for an absolute
            beginner who would like to know how useEffect and useRef work.
          </p>
        </Collapsible>
        <Collapsible
          icon={<Cnt1 />}
          title="DAO Research and Dev."
          btn={<button className="button-bir">FREE FOR ALL</button>}
          ico={<Iconetiket />}
        >
          <p>
            I am going to assume that you know the basics like how a component
            works, how useState works, and how to set up React. I will only
            focus on building the project and though this is for an absolute
            beginner who would like to know how useEffect and useRef work.
          </p>
        </Collapsible>
        <Collapsible
          icon={<Cnt0 />}
          title="Web3 Gamification Projects"
          btn={<button className="button-iki">COLAB OPEN</button>}
          ico={<Iconetiket />}
        >
          <p>
            I am going to assume that you know the basics like how a component
            works, how useState works, and how to set up React. I will only
            focus on building the project and though this is for an absolute
            beginner who would like to know how useEffect and useRef work.
          </p>
        </Collapsible>
        <Collapsible
          icon={<Cnt0 />}
          title="Web3 apps for brands: DApps"
          btn={<div className="fiveweeks"> +7 WEEKS / PAID</div>}
          ico={<Kaydetico />}
        >
          <p>
            I am going to assume that you know the basics like how a component
            works, how useState works, and how to set up React. I will only
            focus on building the project and though this is for an absolute
            beginner who would like to know how useEffect and useRef work.
          </p>
        </Collapsible>
        <Collapsible icon={<Cnt2 />} title="UI and backend web designs">
          <p>
            I am going to assume that you know the basics like how a component
            works, how useState works, and how to set up React. I will only
            focus on building the project and though this is for an absolute
            beginner who would like to know how useEffect and useRef work.
          </p>
        </Collapsible>
        <Collapsible
          icon={<Cnt3 />}
          title="Web 3.0 Community Making Services (TW, IG, DC)"
          btn={<button className="button-iki">COLAB OPEN</button>}
          ico={<Iconetiket />}
        >
          <p>
            I am going to assume that you know the basics like how a component
            works, how useState works, and how to set up React. I will only
            focus on building the project and though this is for an absolute
            beginner who would like to know how useEffect and useRef work.
          </p>
        </Collapsible>
        <Collapsible icon={<Cnt0 />} title="Art direction and branding service">
          <p>
            I am going to assume that you know the basics like how a component
            works, how useState works, and how to set up React. I will only
            focus on building the project and though this is for an absolute
            beginner who would like to know how useEffect and useRef work.
          </p>
        </Collapsible>
        <Collapsible
          icon={<Cnt0 />}
          title="BRAND BUILDING for gaming/progaming brandS"
        >
          <p>
            I am going to assume that you know the basics like how a component
            works, how useState works, and how to set up React. I will only
            focus on building the project and though this is for an absolute
            beginner who would like to know how useEffect and useRef work.
          </p>
        </Collapsible>
        <Collapsible
          icon={<Cnt3 />}
          title="Sustainable Web 3.0"
          btn={<button className="button-iki">COLAB OPEN</button>}
          ico={<Iconetiket />}
        >
          <p>
            I am going to assume that you know the basics like how a component
            works, how useState works, and how to set up React. I will only
            focus on building the project and though this is for an absolute
            beginner who would like to know how useEffect and useRef work.
          </p>
        </Collapsible>
        <Collapsible
          icon={<Cnt2 />}
          title="Community build for community use"
          btn={<button className="button-bir">FREE FOR ALL</button>}
        >
          <p>
            I am going to assume that you know the basics like how a component
            works, how useState works, and how to set up React. I will only
            focus on building the project and though this is for an absolute
            beginner who would like to know how useEffect and useRef work.
          </p>
        </Collapsible>
        <Collapsible
          icon={<Cnt1 />}
          title="COMMUNITY DAPP: WHITEPAPER.IO"
          btn={<button className="button-bir">FREE FOR ALL</button>}
          ico={<Iconetiket />}
        >
          <p>
            I am going to assume that you know the basics like how a component
            works, how useState works, and how to set up React. I will only
            focus on building the project and though this is for an absolute
            beginner who would like to know how useEffect and useRef work.
          </p>
        </Collapsible>
      </div>
      <Avatar icon={<Berkavatar />} icon1={<Ilgazavatar></Ilgazavatar>} />
      <Newft />

      <ScrollButton />
    </div>
  );
}

export default App;
