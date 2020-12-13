import React from 'react';
import Table from 'react-bootstrap/Table'

const MainTable = () => {
    return (
        <Table striped bordered hover responsive size="sm">
            <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>

            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>

            </tr>

            <tr>
                <td>2</td>
                <td colSpan="2">Larry the Bird</td>


            </tr>
            <tr>
                <td>2</td>

                <td>@twitter</td>
                <td>@twitter</td>

            </tr>

            </tbody>
        </Table>
    );
};

export default MainTable;
