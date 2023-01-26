import React, { useEffect } from 'react';
import { FetchProducts, AddCart } from '../actions';
import { connect } from 'react-redux';

const Product = (props) => {
  useEffect(() => {
    props.FetchProducts();
  }, []);

  const { _products } = props._products;
  if (_products.length > 0) {
    return (
      <div className="book__container">
        {_products.map((item, index) => (
          <div key={index} className="book__card">
            <img alt="book" src={item.image} className="book-img" />
            <div className="book__title">{item.name}</div>
            <div className="book__author">{item.author}</div>
            <div className="book__price">{item.price} тенге</div>
            <span
              className="book__btn"
              style={{ cursor: 'pointer' }}
              onClick={() => props.AddCart(item)}
            >
              Добавить в корзину
            </span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="loading">
      <h2>Loading...</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    _products: state._todoProduct,
  };
};

const mapDispatchToProps = {
  FetchProducts,
  AddCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
