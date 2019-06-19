import React from 'react';
import er from '../images/esroom.png';
import anime from '../images/anime.png';
import fantasy from '../images/fantasy.png';

const Hobby = (props) => {

  const { hobby_anime, hobby_fantasy, hobby_er } = props;

  let counterOff = false;

  let counter = () => {
    if (!counterOff) {
      const hobbyNumbers = document.getElementsByClassName('number');
      let counterOn = true;

      const checkCounter = () => {
        if (counterOn) {
          for (const hobbyNumber of hobbyNumbers) {
            const hobbyValue = hobbyNumber.value;
            let currentValue = 0;
            let intervalTime = 200;

            const count = () => {
              if (currentValue < hobbyNumber.value) currentValue++;
              hobbyNumber.textContent = currentValue;
            }

            if (hobbyValue > 100) intervalTime = 20;
            else if (hobbyValue < 100 && hobbyValue > 10) intervalTime = 30;
            else intervalTime = 200;

            currentValue < hobbyValue ? counter = setInterval(count, intervalTime) : clearInterval(counter);
          }
          counterOn = false;
        }
        counterOff = !counterOn;
      }
      checkCounter();
    }
  }

  return (
    <article className="mainStats" id="mainStats" onMouseDown={counter}>
      <div className="stats">
        <div className="statImg">
          <img src={er} alt="Sherlock" />
        </div>
        <button className="number" value='6' disabled>0</button>
        <p className="hobby">{hobby_er}</p>
      </div>

      <div className="stats">
        <div className="statImg">
          <img src={anime} alt="Sailor Moon" />
        </div>
        <button className="number" value='239' disabled>0</button>
        <p className="hobby">{hobby_anime}</p>
      </div >

      <div className="stats">
        <div className="statImg">
          <img src={fantasy} alt="Dragon" />
        </div>
        <button className="number" value='99' disabled>0</button>
        <p className="hobby">{hobby_fantasy}</p>
      </div >
    </article >

  );
}

export default Hobby;