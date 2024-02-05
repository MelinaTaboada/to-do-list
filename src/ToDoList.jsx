import "./App.css";
import React from "react";
import { useState } from "react";

export const List = () => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const [list, setList] = useState([]);

  const onSubmit = (event) => {
    const item = { task: inputValue , tachado: false};
    event.preventDefault();
    setList((list) => [...list, item]);
    setInputValue("");
  };

  const handleChange = (event, index) => {
    var checkedList = [...list];
    checkedList[index].tachado = !checkedList[index].tachado
    setList(checkedList);
  };

  const isChecked = (tachado) =>
    tachado ? "checked-item" : "not-checked-item";

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>To Do List</h1>
        <input className="input-text"
          type="text"
          placeholder="Ingrese aqui su tarea"
          value={inputValue}
          onChange={onInputChange}
        ></input>
      </form>
      <div>
        {list.map((item, index) => (
          <div className="list" key={index}>
            <input value={index} type="checkbox" onChange={event => handleChange(event, index)} />
            <span className={isChecked(item.tachado)}>{item.task}</span>
          </div>
        ))}
      </div>
    </>
  );
};
