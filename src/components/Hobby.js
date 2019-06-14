import React from 'react';
import er from '../images/esroom.png';
import anime from '../images/anime.png';
import fantasy from '../images/fantasy.png';

const counter = () => {
  console.log("działam");
}

const Hobby = (props) => {

  const { hobby_anime, hobby_fantasy, hobby_er } = props

  return (

    <article className="mainStats" id="mainStats" onMouseEnter={counter}>
      <div className="stats">
        <div className="statImg">
          <img src={er} alt="Sherlock" />
        </div>
        <h4 className="number" value='6'>6</h4>
        <p className="hobby">{hobby_er}</p>
      </div>

      <div className="stats">
        <div className="statImg">
          <img src={anime} alt="Sailor Moon" />
        </div>
        <h4 className="number" value='239'>239</h4>
        <p className="hobby">{hobby_anime}</p>
      </div >

      <div className="stats">
        <div className="statImg">
          <img src={fantasy} alt="Dragon" />
        </div>
        <h4 className="number" value='99'>99</h4>
        <p className="hobby">{hobby_fantasy}</p>
      </div >
    </article >

  );
}

export default Hobby;