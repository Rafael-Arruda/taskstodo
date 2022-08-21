import React, {useContext, useState} from "react";
import { Container, Label } from "./style";
import { MdEdit, MdDelete } from 'react-icons/md'
import { FiArrowUp } from 'react-icons/fi'
import { ListsContext } from "../../contexts/lists";

import Modal from '../Modal';

export default function Card(props){
    const {list, setList} = useContext(ListsContext);

    const [showModal, setShowModal] = useState(false);

    function removeTask(id){
        const storage = localStorage.getItem('taskstodo');
        const tasks = JSON.parse(storage);

        let currentList = tasks.filter((item) => item.id !== id);
        
        localStorage.setItem('taskstodo', JSON.stringify(currentList));
        setList(currentList);
    }

    function toggleShowModal(){
        setShowModal(!showModal);
    }

    function moveUp(id, item){
        removeTask(id);
        const storage = localStorage.getItem('taskstodo');
        const tasks = JSON.parse(storage);

        tasks.unshift(item);
        let currentList = tasks;

        localStorage.setItem('taskstodo', JSON.stringify(currentList));
        setList(currentList);
    }

    return(
        <>
            <Container>
                <Label status={props.item.status}></Label>
                <h4>{props.item.task}</h4>
                <div className="area-buttons">
                    <button className="btn-up" onClick={() => moveUp(props.item.id, props.item)}>
                        <FiArrowUp color="#000" size={12}/>
                    </button>
                    <button onClick={toggleShowModal}>
                        <MdEdit color="#000" size={22}/>
                    </button>
                    <button onClick={() => removeTask(props.item.id)}>
                        <MdDelete color="#000" size={22}/>
                    </button>
                </div>

            </Container>
            
            {showModal && 
            <Modal
            action="edit"
            title="Edit"
            item={props.item}
            close={toggleShowModal} 
            />
            }
        </>
    )
}