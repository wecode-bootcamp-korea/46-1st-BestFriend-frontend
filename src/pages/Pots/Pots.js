import React from 'react';
// import ProductCard from '../../components/ProductCard/ProductCard';
import './Pots.scss';

const PLANTS_SUBCATEGORY = [
  { id: '전체보기', subcategoryName: '전체보기' },
  { id: '도자기', subcategoryName: '도자기 화분' },
  { id: '토분', subcategoryName: '토분' },
  { id: '유약분', subcategoryName: '유약분' },
];

const Pots = () => {
  return (
    <div className="pots">
      <aside>
        <h1>화분</h1>
        <ul className="subcategory">
          {PLANTS_SUBCATEGORY.map(subcategory => {
            return <li key={subcategory.id}>{subcategory.subcategoryName}</li>;
          })}
        </ul>
      </aside>
      <main>
        <div className="sorting">
          <h2>정렬 기준</h2>
        </div>
        <div className="product-cards">
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
      </main>
    </div>
  );
};

export default Pots;
