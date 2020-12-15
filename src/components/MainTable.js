import React from 'react';
import Table from 'react-bootstrap/Table'
import { useFetchMessages } from '../hooks/useFetchMessages';
import { TableRow } from './TableRow';

const MainTable = () => {

    const {data} = useFetchMessages();
    

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
            {
                data.map((info) => {
                    return <TableRow
                        key = {info.time}
                        {...info} 
                    />
                })
            }
            
            </tbody>
        </Table>
    );
};

export default MainTable;
