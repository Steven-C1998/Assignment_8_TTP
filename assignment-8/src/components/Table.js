import React from "react";
import TableRow from "./TableRow";


export default function Table(props) {
    const rows = props.state.rows
    const columns = props.state.columns
    const color = props.state.color
    const isFilled = props.state.isFilled

    const tableRows = []
    for (let i = 0; i < rows; i++) {
        tableRows.push(<TableRow key={i} columns={columns} color={color} isFilled={isFilled}></TableRow>)
    }

    return (
        <div className="grid-column">
            {tableRows}
        </div>
    )
}