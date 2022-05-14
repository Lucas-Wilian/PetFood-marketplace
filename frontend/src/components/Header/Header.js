import React from 'react';
import Logo from '../../assets/logo-white.png';
import LogoWhite from '../../assets/logo.png';
export const Header = ({ whiteVersion }) => {
  return (
    <div className='col-12'>
      <header className='py-4 px-4 text-center'>
        <img
          src={whiteVersion ? Logo : LogoWhite}
          alt='img-logo'
          className='img-fluid'
        />
      </header>
    </div>
  );
};
