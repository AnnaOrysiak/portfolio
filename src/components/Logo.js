import React from 'react';
import '../style/logo.css';

const Logo = (props) => {
  return (
    <div className={props.small ? 'logo small' : 'logo'} >
      <div className="logoO"></div>
      <div className="logoA"></div>
    </div>

  );
}

export default Logo;