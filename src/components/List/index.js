import React from "react";
import { useState, useContext } from "react";
import { Container } from "./style";

import { ListsContext } from "../../contexts/lists";

import {MdAdd} from 'react-icons/md';

import Card from "../Card";
import Modal from '../Modal';

export default function List(props){

    const {setList} = useContext(ListsContext);
    
    const [showModal, setShowModal] = useState(false);

    function toggleShowModal(){
        setShowModal(!showModal);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(ev, status) {
        let id = ev.dataTransfer.getData("id");

        const storage = localStorage.getItem('taskstodo');
        let tasks = JSON.parse(storage);
        let currentList = tasks.map((task) => {
            if(task.id === parseInt(id)) {
                return {...task, status: status}
            }

            return task;
        })

        localStorage.setItem('taskstodo', JSON.stringify(currentList));
        setList(currentList);
    }

    return(
        <>
            <Container
                onDragOver={(e) => dragOver(e)}
                onDrop={(e) => drop(e, props.status)}
            >
                <header>
                    <div>
                        <h4>{props.title}</h4>
                        <span>{props.list.length} Total</span>
                    </div>
                    {props.title === "To do" && 
                    <button onClick={toggleShowModal}>
                        <MdAdd color="#fff" size={22}/>
                    </button>
                    }
                </header>
                {props.list.map((item) => (
                    <Card 
                        key={item.id} 
                        id={item.id}
                        item={item}
                    />
                ))}

            </Container>

            {showModal && 
            <Modal
            action="add"
            title="Add a new Task"
            item={{task: "", status: "do"}}
            close={toggleShowModal}
            />
            }
        </>
    )
}