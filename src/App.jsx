import React, { useState } from "react";
import Button from "./components/Button";
import './app.css'

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event){
    const newValue = event.target.value;
    setInputText(newValue);
  }
  
  function addItem() {
    if (inputText.trim() === ""){
      return;
    }
    setItems((prevItems => [...prevItems, {text: inputText, isChecked : false}]),
    setInputText("")
    )
  }

  function removeItem(index) {
    setItems((prevItems) => prevItems.filter((item, idx) => idx !== index))
  }

  function markedDone(index) {
    setItems((prevItems) => 
    prevItems.map((item,idx) =>
    idx === index? {...item, isChecked: !item.isChecked} : item));
  }
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <Button action={addItem} buttonName="Add"/>
      </div>
      <div>
         <ul>
            {items.map((todoItem, index) => {
                return (
                <li key={index}>
                  <input className="checkbox "type="checkbox" checked={todoItem.isChecked} onChange={() => markedDone(index)} />
                  <label style={{textDecoration: todoItem.isChecked ? 'line-through': 'none'}}>
                  {todoItem.text}
                  </label>
                  <ion-icon name="close-outline" onClick={() => removeItem(index)}></ion-icon>
                </li>
            )
            })}
          </ul>
      </div>
    </div>
  );
}

export default App;
