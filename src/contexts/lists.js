import { useState, createContext } from "react";
import {useEffect} from 'react';

export const ListsContext = createContext({});

function ListsProvider({children}){

    const [list, setList] = useState([]);
    const [toDo, setToDo] = useState([]);
    const [doing, setDoing] = useState([]);
    const [done, setDone] = useState([]);

    useEffect(() => {
        const storage = localStorage.getItem('taskstodo');
        setList(JSON.parse(storage) || []);
    }, [])

    useEffect(() => {
        setToDo(list.filter((item) => item.status === "do"))
        setDoing(list.filter((item) => item.status === "doing"))
        setDone(list.filter((item) => item.status === "done"))
    }, [list])
    
    return(
        <ListsContext.Provider value={
            {   
                list,
                toDo,
                doing, 
                done, 
                setList
            }
        }>
            {children}
        </ListsContext.Provider>
    )
}

export default ListsProvider;