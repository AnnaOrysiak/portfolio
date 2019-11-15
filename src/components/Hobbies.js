import React from 'react';
import Hobby from './Hobby';
import er from '../images/esroom.png';
import anime from '../images/anime.png';
import fantasy from '../images/fantasy.png';

const Hobbies = (props) => {

  const { hobby_anime, hobby_fantasy, hobby_er } = props;

  const hobbies = [
    {
      id: 1,
      desc: hobby_er,
      img: er,
      alt: "Sherlock",
      value: 6
    },
    {
      id: 2,
      desc: hobby_anime,
      img: anime,
      alt: "Sailor Moon",
      value: 239
    },
    {
      id: 3,
      desc: hobby_fantasy,
      img: fantasy,
      alt: "Dragon",
      value: 99
    }
  ];

  let hobbyList = [];

  if (hobbies) {
    hobbyList = hobbies.map(hobby => <Hobby key={hobby.id} properties={hobby} />)
  }

  return (
    <article className="mainStats" id="mainStats">
      {hobbyList}
    </article >

  );
}

export default Hobbies;