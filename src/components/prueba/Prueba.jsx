import React, { useEffect } from "react";

export const Prueba = () => {
  useEffect(() => {
    return () => {};
  }, []);
  const getName = (e, { name }) => {
    e.preventDefault();
    alert(name);
  };
  const mostrarTecla = (e) => {
    console.log(e.key);
  };
  const getOnChangeData = (e) => {
    console.log(e.target.value);
  };
  const preventVocalsExercise = (e) => {
    let regEx = /[aeiouAEIOU]/;
    if (regEx.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <>
      <button onClick={(e) => getName({ name: "jorge" })}>dame nombre</button>
      <button onClick={() => getName({ name: "manuel" })}>dame nombre</button>
      <input type="text" onKeyDown={mostrarTecla} />
      <input type="text" onChange={getOnChangeData} />
      <input type="text" onKeyDown={preventVocalsExercise} />
    </>
  );
};
