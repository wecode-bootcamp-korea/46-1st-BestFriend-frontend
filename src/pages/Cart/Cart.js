import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillWarning } from 'react-icons/ai';
import { APIS } from '../../config';
import CartBox from './component/CartBox';
import './Cart.scss';

const Cart = () => {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const navigate = useNavigate();

  const getCart = () => {
    fetch(`${APIS.carts}`, {
      method: 'GET',
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('통신실패');
      })
      .then(data => {
        setCartList(data.carts);
      });
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsAlertOpen(false);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  });

  // 차후 mock data 통신
  // useEffect(() => {
  //   fetch('/data/cartData.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setProductList(data);
  //     });
  // }, []);

  useEffect(() => {
    getCart();
  }, []);

  const calculation = cartList.map(product => product.price * product.quantity);
  const totalPrice = calculation.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);

  return (
    <div className="cart">
      <h1 className="cart-title">장바구니</h1>
      <div className="cart-container">
        <main className="cart-main">
          {/* TODO : 차후 mock data 통신을 통해 사용할 코드
            {productList.map(product => {
            return (
              <CartBox
                key={product.id}
                product={product}
                setProductList={setProductList}
                id={product.id}
              />
            );
          })} */}
          {cartList.length === 0 && (
            <div className="cart-warning">
              <div>
                <AiFillWarning className="warning-icon" />
                <p>장바구니가 비어 있습니다.</p>
              </div>
            </div>
          )}
          {cartList.map(product => {
            return (
              <CartBox
                key={product.id}
                cartId={product.product_id}
                product={product}
                setCartList={setCartList}
                getCart={getCart}
              />
            );
          })}
        </main>
        <aside className="cart-aside">
          <h1 className="aside-title">주문금액</h1>
          <div className="price">
            <div className="price-sort">
              <p>상품금액</p>
              <p>{Number(totalPrice).toLocaleString('en')}원</p>
            </div>
            <div className="price-sort">
              <p>배송비</p>
              <p>무료</p>
            </div>
          </div>
          <div className="total-price">
            <div className="price-sort">
              <p>총 결제금액</p>
              <p>{Number(totalPrice).toLocaleString('en')}원</p>
            </div>
          </div>
          <button
            className="btn order-btn"
            onClick={() => {
              cartList.length === 0
                ? setIsAlertOpen(true)
                : navigate('/checkout');
            }}
          >
            주문하기
          </button>
          <div className={isAlertOpen ? 'alert-box' : 'alert-box hidden-alert'}>
            <p>상품을 먼저 담아주세요.</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
