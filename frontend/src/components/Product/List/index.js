import React from 'react';
import './styles.css';

export const Product = () => {
  return (
    <div className='product-list col-12'>
      <div className='row'>
        <div className='col-3'>
          <img
            src='https://www.petlove.com.br/images/products/220643/product/Ra%C3%A7%C3%A3o_Three_Dogs_Original_Frango__Carne_e_Arroz_para_C%C3%A3es_Adultos_Ra%C3%A7as_Pequenas_e_Mini_2064432.jpg?1582199958'
            className='img-fluid'
            alt='img-product'
          />
        </div>
        <div className='col-6'>
          <h6>
            <label className='badge badge-primary'>R$ 30,00</label>
          </h6>
          <small>
            <b>Nome do Produto</b>
          </small>
        </div>
        <div className='col-3'>
          <button className='btn btn-secondary rounded-circle'>-</button>
        </div>
      </div>
    </div>
  );
};
