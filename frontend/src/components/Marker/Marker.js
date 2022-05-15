import React from 'react';
import './style.css';
import MarkerIcon from '../../assets/marker.png';
// import MarkerIconSelected from '../../assets/marker-selected.png';

export const Marker = () => {
  return (
    <div>
      <img alt='img-marker-pointer' src={MarkerIcon} />
      <img
        className='img-marker'
        alt='img-marker'
        src='https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png'
      />
    </div>
  );
};
