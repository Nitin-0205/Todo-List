import { useState } from 'react';
import './App.css';
import {faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Todo from "./Item";

export default function App() {
  const [inputList, setInputList] = useState("");
  const [Items , setListItem] = useState([])

  const TakeEntry = (event) =>{
    setInputList(event.target.value);
  }

  const AddItem = () => {    
    if(inputList !== ''){
      setListItem((oldItem) => {
        return [ ...oldItem, inputList]
      });
      setInputList('');
    }
  }

  const delete_item = (item_index) =>{
    setListItem((oldItem)=>{
      return oldItem.filter((arrElem,index) => {
        return index != item_index;
      })
    });      
  }

  return (
    <div className="App">
      <div className = "Container">
        <h1>ToDo List</h1>
        <div className = "Entry_Container">
          <div className = "input_Container">
          <input className = "Entry" placeholder ="Add Item" value = {inputList} onChange ={TakeEntry}></input>
          <button className= "add_button" onClick = {AddItem} ><FontAwesomeIcon icon={faPlus} /></button>
          </div>
          <div>
            <ul>
               {Items.map((itemvalue , index) => {
                return <Todo text = {itemvalue} 
                    ind = {index}
                    onSelect = {delete_item}/>;
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
