import { fetchMessages } from '../api/fetchMessages';
import { useEffect, useState } from 'react';


export const useFetchMessages = () => {

    const [state, setState] = useState({
        data:[]
    });

    useEffect(() => {
        fetchMessages()
            .then( info =>{
                setState({
                    data: info.data
                })
            })
       
    },)

    return state;
};