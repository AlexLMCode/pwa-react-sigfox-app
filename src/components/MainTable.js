import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { fetchMessages } from '../api/fetchMessages';
import { useFetchMessages } from '../hooks/useFetchMessages';
import { TableRow } from './TableRow';

const MainTable = () => {

   const llamarApi = async () => { 
     await fetchMessages();
   }
    useEffect(() => {
      llamarApi();
    }, [])


    return (
        <Table striped bordered hover responsive size="sm">
            <thead>
            <tr>
                <th>Estado</th>
                <th>Fecha</th>
                {/* <th>Flujo</th> */}

            </tr>
            </thead>
            <tbody>
            {/* {
                data.map((info) => {
                    return <TableRow
                        key = {info.time}
                        {...info} 
                    />
                })
            } */}
            
            </tbody>
        </Table>             
    );
};

export default MainTable;
