import React, { useEffect, useState } from "react";

export default function TableCell(props) {
    let isFilled = props.isFilled
    let down = false
    const [color, setColor] = useState("white")

    function changeColor() {
        setColor(props.color)

    }
    document.addEventListener("mousedown", function () {
        down = true

    })
    //check if mouse down is false
    document.addEventListener("mouseup", function () {
        down = false

    })

    const box = document.querySelector('#container')
    const cell = document.getElementById("grid-item")
    
    //mousedown and mouse over to change color
    function mouseDrag(e) {
        if (down) {
            if (e.target.className === 'grid-item') {
                e.target.style.backgroundColor = setColor(props.color);
            }
        }
    }

    return (
        <div id="grid-item" className="grid-item" style={{ backgroundColor: color }} onClick={changeColor} onMouseEnter={mouseDrag}></div>
    )

}

