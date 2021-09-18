import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import { fetchMessages } from '../api/fetchMessages';
import { TableRow } from './TableRow';

const MainTable = () => {

  const [data, setData] = useState([]);
  const loadData = async () =>{
    const newData = await fetchMessages();
    setData(newData);
  }
  useEffect(() => {
    loadData();
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
