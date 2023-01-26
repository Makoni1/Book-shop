import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="nav-link books__btn">
          Книги
        </Link>

        <Link to="/carts" className="nav-link basket__btn ">
          Корзина : {props.numberCart}
        </Link>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    numberCart: state._todoProduct.numberCart,
  };
};

export default connect(mapStateToProps, null)(Header);
