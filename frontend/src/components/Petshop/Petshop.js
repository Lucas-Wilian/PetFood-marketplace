import React from 'react';
import './style.css';

export const Petshop = () => {
  return (
    <li className='petshop d-inline-block'>
      <div className='d-inline-block'>
        <img
          className='img-fluid'
          alt='img-petshop'
          src='https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png'
        />
      </div>
      <div className='d-inline-block pl-3 align-bottom'>
        <b>Petlove</b>
        <div className='petshop-infos'>
          <span className='mdi mdi-star'></span>
          <text>
            <b>2,8</b>
          </text>
          <span className='mdi mdi-cash-usd-outline'></span>
          <text>$$$</text>
          <span className='mdi mdi-crosshairs-gps'></span>
          <text>2,9 km</text>
        </div>

        <label className='badge badge-primary'>Frete Grátis</label>
      </div>
    </li>
  );
};
