import React, {useContext} from "react";
import { useState } from "react";
import {Container} from './style';
import {MdClose} from 'react-icons/md';

import { ListsContext } from "../../contexts/lists";

export default function Modal(props){

    const {setList} = useContext(ListsContext);

    const [action, setAction] = useState(props.action);
    const [task, setTask] = useState(props.item.task);
    const [status, setStatus] = useState(props.item.status);

    function addTask(){
        if(task.trim() === ""){
            return
        }
        const storage = localStorage.getItem('taskstodo');
        let tasks = JSON.parse(storage) || [];

        tasks.push({task: task, status: status, id: Date.now()});
        localStorage.setItem('taskstodo', JSON.stringify(tasks));

        setList(tasks);
        {props.close()}
    }

    function editTask(id){
        if(task.trim() === ""){
            return
        }
        const storage = localStorage.getItem('taskstodo');
        let tasks = JSON.parse(storage);
        let currentList = tasks.filter((item) => item.id !== id);
        
        currentList.push({task: task, status: status, id: id});
        localStorage.setItem('taskstodo', JSON.stringify(currentList));

        setList(currentList);
        {props.close()}
    }

    function handleInput(e){    
        setTask(e.target.value);
    }

    function handleOptionChange(e){
        setStatus(e.target.value);
    }

    return(
        <Container>
            <div className="modal">
                <div className="header">
                    <h5>{props.title}</h5>
                    <button onClick={props.close}>
                        <MdClose color="#fff" size={20}/>
                    </button>
                </div>
                <div className="inputs">
                    <input 
                    type="text"
                    autoFocus
                    placeholder="New task"
                    value={task}
                    onChange={handleInput}
                    />
                    <div className="status">
                        <input 
                        type="radio" 
                        name="radio" 
                        value="do"
                        onChange={handleOptionChange}
                        checked={ status === 'do'}
                        />
                        <span>do</span>

                        <input 
                        type="radio" 
                        name="radio" 
                        value="doing"
                        onChange={handleOptionChange}
                        checked={ status === 'doing' }
                        />
                        <span>doing</span>

                        <input 
                        type="radio" 
                        name="radio" 
                        value="done"
                        onChange={handleOptionChange}
                        checked={ status === "done" } 
                        />
                        <span>done</span>
                    </div>
                </div>
                {action === "add" ? 
                <button onClick={() => addTask()}>Confirm</button> 
                : 
                <button onClick={() => editTask(props.item.id)}>Edit</button>
                }
            </div>
        </Container>
    )
}