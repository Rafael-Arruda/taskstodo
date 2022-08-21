import React, { useContext } from "react";
import { Container } from "./style";
import { ListsContext } from "../../contexts/lists";
import List from '../List'

export default function Board(){

    const {toDo, doing, done} = useContext(ListsContext);

    return(
        <Container>
            <List title="To do" list={toDo}/>
            <List title="Doing" list={doing}/>
            <List title="Done" list={done}/>
        </Container>
    )
}