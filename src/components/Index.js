import React from 'react';
import img from '../assets/images';
import ItemListContainerApp from './itemListContainer/ItemListContainer';
import './main.scss';
export const IndexApp = () => {
  return (
    <div className="banner">
      <img src={img.heyMalbecBanner} />
      <h2 className="title">Productos</h2>
      <ItemListContainerApp categories={false} limit={3} />
    </div>
  );
};
