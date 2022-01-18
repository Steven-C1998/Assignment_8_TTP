import React from "react";
import TableCell from "./TableCell"

export default function TableRow(props) {
    const tableColumns = []
    const columns = props.columns
    const color = props.color
   // const isFilled = isFilled
    //
    for (let i = 0; i < columns; i++) {
        tableColumns.push(<TableCell color={color} key={i}></TableCell>)
    }

    return (
        <div className="row-grid">
            {tableColumns}
        </div>
    )
}