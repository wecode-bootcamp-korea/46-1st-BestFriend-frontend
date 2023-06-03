import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Recommend from './component/Recommend';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [recommendList, setRecommendList] = useState([]);
  const [productList, setProductList] = useState({});
  const [count, setCount] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/recommend.json')
      .then(res => res.json())
      .then(data => {
        setRecommendList(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/productDetail.json')
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);
  return (
    <>
      <main className="product-detail">
        <figure className="product-img">
          <img src={productList.img_url} alt="product-img" className="img" />
        </figure>
        <section className="product-content">
          <p className="p-tag">{productList.title}</p>
          <h1 className="title">{productList.name}</h1>
          <p className="p-tag">
            {Number(productList.price).toLocaleString('en')}원
          </p>
          <p className="p-tag">{productList.detail}</p>
          <div className="count-container">
            <button className="btn">
              <img
                src="/images/ProductDetail/arrow-down.png"
                alt="arrow-img"
                className="img"
              />
            </button>
            <div className="count-box">{count}</div>
            <button className="btn">
              <img
                src="/images/ProductDetail/arrow-up.png"
                alt="arrow-img"
                className="img"
              />
            </button>
          </div>
          <button
            className="btn cart-btn"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            장바구니 담기
          </button>
          <button
            className="btn wishlist-btn"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            위시리스트
          </button>
        </section>
      </main>
      <section className="product-recommend">
        <p>이런 식물은 어때요?</p>
        <div className="recommend-container">
          {recommendList.map(product => {
            return <Recommend key={product.id} product={product} />;
          })}
        </div>
      </section>
      <section className={isModalOpen ? 'modal-box visible' : 'modal-box'}>
        <div className="modal">
          <div className="img-box">
            <img
              src="/images/Nav/gron-logo.png"
              alt="logo-img"
              className="logo-img"
            />
          </div>
          <div>
            <p>선택하신 상품이 장바구니에 담겼습니다.</p>
            <div className="btn-box">
              <button
                className="btn"
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                계속 쇼핑하기
              </button>
              <button
                className="btn"
                onClick={() => {
                  navigate('/cart');
                }}
              >
                장바구니보기
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
