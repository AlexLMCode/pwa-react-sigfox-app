import React from 'react'
import { dateDecoder } from '../lib/dateDecoder';

export const TableRow = ({time, data}) => {
    const status = data==="01"?"Encendido":"Apagado"
    return (
        <tr>
            <td
                className={status}
            >
                {status}
            </td>
            <td
            >
                {dateDecoder(time)}
            </td>
            {/* <td>A calcular</td> */}
        </tr>
    )
}
