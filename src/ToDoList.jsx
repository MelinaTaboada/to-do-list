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
    const task = { task: inputValue };
    event.preventDefault();
    console.log(inputValue);
    setList((list) => [...list, task]);
    setInputValue("");
  };

  const [checked, setChecked] = useState([]);

  const handleChange = (event) => {
    var checkedList = [...checked];
    if (event.target.checked) {
      checkedList = [...checked, event.target.value];
    } else {
      checkedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(checkedList);
  };

  const isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

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
            <input value={item.task} type="checkbox" onChange={handleChange} />
            <span className={isChecked(item.task)}>{item.task}</span>
          </div>
        ))}
      </div>
    </>
  );
};
