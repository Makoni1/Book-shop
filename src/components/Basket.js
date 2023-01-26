import React from 'react';
import { connect } from 'react-redux';
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from '../actions';
import Delete from '../assets/x-red.svg';

function Basket({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart }) {
  let ListCart = [];
  let TotalCart = 0;
  Object.keys(items.Carts).forEach(function (item) {
    TotalCart += items.Carts[item].quantity * items.Carts[item].price;
    ListCart.push(items.Carts[item]);
  });
  function TotalPrice(price) {
    return Number(price).toLocaleString();
  }

  return (
    <div className="basket__container">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th className="table-title">Название</th>
            <th className="table-title">Автор</th>
            <th className="table-title">Книга</th>
            <th className="table-title">Цена</th>
            <th className="table-title">Количество</th>
            <th className="table-title">Общая сумма</th>
          </tr>
        </thead>
        <tbody>
          {ListCart.map((item, key) => {
            return (
              <tr key={key}>
                <td>
                  <div className="delete-btn" onClick={() => DeleteCart(key)}>
                    <img alt="delete-img" src={Delete} />
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.author}</td>
                <td>
                  <img alt="book" className="basket-image" src={item.image} />
                </td>
                <td>{item.price} тенге</td>
                <td>
                  <span
                    className="change-btn"
                    onClick={() => DecreaseQuantity(key)}
                  >
                    -
                  </span>
                  <span className="btn-info">{item.quantity}</span>
                  <span
                    className="change-btn"
                    onClick={() => IncreaseQuantity(key)}
                  >
                    +
                  </span>
                </td>
                <td>{TotalPrice(item.price, item.quantity)} тенге</td>
              </tr>
            );
          })}
          <tr>
            <td colSpan="6" className="total-sum">
              Общая сумма
            </td>
            <td className="total-sum">
              {Number(TotalCart).toLocaleString()} тенге
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    items: state._todoProduct,
  };
};

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
})(Basket);
