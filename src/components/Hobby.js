import React from 'react';
import { InView } from 'react-intersection-observer';

const Hobby = (props) => {

  const { id, desc, img, alt, value } = props.properties;

  let counter = (active, e) => {

    if (active) {

      const currentHobby = document.getElementById(e);
      const hobbyValue = currentHobby.value;
      let currentValue = 0;
      let intervalTime = 200;

      if (hobbyValue > 100) intervalTime = 20;
      else if (hobbyValue < 100 && hobbyValue > 10) intervalTime = 30;
      else intervalTime = 200;

      let count = () => {

        const checkCounter = () => {

          if (currentValue < hobbyValue) currentValue++;
          currentHobby.textContent = currentValue;

          if (currentValue < hobbyValue) {
            if (currentValue <= 1) {
              count = setInterval(count, intervalTime)
            }
          } else { clearInterval(count) }
        }
        checkCounter();

      }
      count();
      active = false;
    }
  }

  return (
    <div className="stats">
      <div className="statImg">
        <img src={img} alt={alt} />
      </div>
      <InView as="button" className="number" id={id} onChange={(inView) => counter(inView, id)} triggerOnce={true} threshold={.9} value={value} disabled>0</InView>
      <p className="hobby">{desc}</p>
    </div>
  )
}

export default Hobby;