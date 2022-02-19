import React from "react";

export const Select = ({ options, onSelect, defaultOptions }) => {
  return (
    <select
      onChange={(e) => {
        onSelect(e.target.value);
      }}
    >
      {options.map((e) => (
        <option>{e.text}</option>
      ))}
    </select>
  );
};
