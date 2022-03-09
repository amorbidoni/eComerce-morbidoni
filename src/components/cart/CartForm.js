import React, { useState } from 'react';
import { useFirebase } from '../../hooks/useFirebase';

export const CartForm = ({ carrito, total }) => {
  const [form, setForm] = useState({
    buyer: {
      name: '',
      phone: '',
      email: '',
    },
    items: carrito,
    total: total,
  });
  const handleInputCange = (e) => {
    setForm({
      ...form,
      buyer: { ...form.buyer, [e.target.name]: e.target.value },
    });
  };
  const { generateOrder } = useFirebase();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    generateOrder({ data: form });
  };
  return (
    <>
      <h2>Ingresa tus datos para terminar la compra</h2>
      <form className="form">
        <div className="form__item">
          <label className="form__item--label" htmlFor="name">
            Nombre:
          </label>
          <input
            onChange={handleInputCange}
            value={form.buyer.name}
            className="form__item--inpit"
            name="name"
            type="text"
          />
        </div>
        <div className="form__item">
          <label className="form__item--label" htmlFor="phone">
            Télefono:
          </label>
          <input
            onChange={handleInputCange}
            value={form.buyer.phone}
            className="form__item--inpit"
            name="phone"
            type="phone"
          />
        </div>
        <div className="form__item">
          <label className="form__item--label" htmlFor="email">
            Email:
          </label>
          <input
            onChange={handleInputCange}
            value={form.buyer.email}
            className="form__item--inpit"
            name="email"
            type="text"
          />
        </div>
        <div className="form__item--btns">
          <button
            className="btn__primary--big "
            disabled={
              !form.buyer.name || !form.buyer.phone || !form.buyer.email
            }
            onClick={handleSubmit}
          >
            Finalizar compra
          </button>
        </div>
      </form>
    </>
  );
};
