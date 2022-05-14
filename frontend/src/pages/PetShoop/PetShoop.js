import React from 'react';
import { Header } from '../../components/Header/Header';

export const PetShoop = () => {
  return (
    <div className='h-100'>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='	col-2'>
            <img
              alt='log0-pet-shop'
              className='img-fluid'
              src='https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png'
            />
            <b>Petlove</b>
            <div className='petshop-infos'>
              <span className='mdi mdi-home'></span>
              <text>
                <b>2,8</b>
              </text>
            </div>
          </div>
          <div className='col-10'></div>
        </div>
      </div>
    </div>
  );
};
