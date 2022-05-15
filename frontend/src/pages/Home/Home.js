import React from 'react';
import './styles.css';
import { Header } from '../../components/Header/Header';
import { Petshop } from '../../components/Petshop/Petshop';
import Map from '../../components/Map/Map';

export const Home = () => {
  return (
    <div className='h-100'>
      <Header />
      <div className='container-fluid petshop-list-container'>
        <div className='col-12 px-4 text-center'>
          <h5>Mais próximos de você (5)</h5>
          <ul className='col-12 petshop-list'>
            {[1, 2, 3, 4, 5].map((p) => (
              <Petshop key={p} />
            ))}
          </ul>
        </div>
      </div>
      <Map />
    </div>
  );
};
