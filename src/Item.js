import React from "react"
import {faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';


const Todo = (prop) =>{
    return <div className = "List_container">
        <li>{prop.text}</li>
        <button onClick = {()=>{prop.onSelect(prop.ind)}}
        className ="delete_item"><FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
}

export default Todo;