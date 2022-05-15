import React from 'react';
import { Header } from '../../components/Header/Header';
import { Card } from '../../components/Product/Card/Card';
import './styles.css';

export const PetShop = () => {
  return (
    <div className='h-100'>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='	col-2'>
            <img
              alt='logo-pet-shop'
              className='img-fluid petshop-image'
              src='https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png'
            />
            <b>Petlove</b>
            <div className='petshop-infos'>
              <span className='mdi mdi-star'></span>
              <text>
                <b>2,8</b>
              </text>
              <span className='mdi mdi-cash-usd-outline'></span>
              <text>$$$</text>

              <span className='mdi mdi-crosshairs-gps'></span>
              <text>2,9km</text>
            </div>
            <label className='badge badge-primary'>Frete Grátis</label>
          </div>
          <div className='col-10'>
            <h5>Produtos</h5>
            <br />
            <div className='row'>
              {[1, 2, 3, 4, 5].map((p) => (
                <Card key={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
