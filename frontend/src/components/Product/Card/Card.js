import React from 'react';
import './styles.css';

export const Card = () => {
  return (
    <div className='product col-3'>
      <div>
        <img
          src='https://cobasi.vteximg.com.br/arquivos/ids/302791/Racao-Heroi-Adulto-Carne-e-Vegetais.jpg?v=637184141121230000'
          alt='card-img'
          className='img-fluid align-center'
        />
        <button className='btn btn-primary rounded-circle'>+</button>
        <h4>
          <label className='badge badge-primary'>R$ 90,00</label>
        </h4>
        <small>
          <b>Nome do Produto</b>
        </small>
      </div>
    </div>
  );
};
