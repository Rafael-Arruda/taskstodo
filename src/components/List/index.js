import React from "react";
import { useState } from "react";
import { Container } from "./style";

import {MdAdd} from 'react-icons/md';

import Card from "../Card";
import Modal from '../Modal';

export default function List(props){
    
    const [showModal, setShowModal] = useState(false);

    function toggleShowModal(){
        setShowModal(!showModal);
    }

    return(
        <>
            <Container>
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
                    <Card key={item.id} item={item}/>
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