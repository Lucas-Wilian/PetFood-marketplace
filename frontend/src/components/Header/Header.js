import React from 'react';
import Logo from '../../assets/logo-white.png';
import LogoWhite from '../../assets/logo.png';
import './style.css';
export const Header = ({ whiteVersion, hideCart }) => {
  const openDrawer = () => {
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event);
  };

  return (
    <div className='col-12'>
      <header className='py-4 px-4 text-center'>
        <img
          src={whiteVersion ? Logo : LogoWhite}
          alt='img-logo'
          className='img-fluid'
        />
      </header>
      {!hideCart && (
        <button
          onClick={() => openDrawer()}
          className='btn btn-secondary cart-button'
        >
          <span className='mdi mdi-cart'></span> 2 Itens
        </button>
      )}
    </div>
  );
};
