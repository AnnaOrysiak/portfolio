import React from 'react';
import { InView } from 'react-intersection-observer';

const Hobby = (props) => {

  const { desc, img, alt, value } = props.properties;

  let counter = (counterOn = false) => {

    if (counterOn) {
      const hobbyNumbers = document.getElementsByClassName('number');

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

            if (currentValue < hobbyValue) {
              if (currentValue === 0) {
                counter = setInterval(count, intervalTime)
              }
            } else { clearInterval(counter) }

          }
        }

        counterOn = false;
      }
      checkCounter();
    }
  }

  return (
    <InView as="div" className="stats" onChange={counter} triggerOnce={true} threshold={.9}>
      <div className="statImg">
        <img src={img} alt={alt} />
      </div>
      <button className="number" value={value} disabled>0</button>
      <p className="hobby">{desc}</p>
    </InView>
  )
}

export default Hobby;