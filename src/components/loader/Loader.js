import React from 'react';
import img from '../../assets/images';
import './loader.scss';

export const LoaderApp = () => {
  return (
    <div className="loader">
      <img className="loader__image" src={img.loader} />
      <p className="loader__text">Cargando...</p>
    </div>
  );
};
