import React, { useEffect, useState } from "react";

export default function TableCell(props) {
    let isFilled = props.isFilled
    let down = false
    const [color, setColor] = useState("white")
    const fillEl = document.getElementById("fillEmpty")
    const resetEl = document.getElementById("resetBtn")
    const fillAllEl = document.getElementById("fillBtn")
    let tempArr = document.querySelectorAll(".grid-item")

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

    //mousedown and mouse over to change color
    function mouseDrag(e) {
        if (down) {
            if (e.target.className === 'grid-item') { 
                e.target.style.backgroundColor = setColor(props.color);
            }
        }
    }

    //fill empty
    if (fillEl) {
        fillEl.addEventListener("click", function () {
            let temp = document.querySelectorAll(".grid-item")
            console.log("help")
            console.log(temp)
            for (let e of temp) {
                console.log()
                if (e.style.backgroundColor == "white") {
                    console.log(e.style.backgroundColor)
                    e.style.backgroundColor = setColor(props.color);
                }
            }
        })
    }
    //reset all colors
    if (resetEl) {
        resetEl.addEventListener("click", function () {
            console.log("help")
            console.log(tempArr)
            for (let e of tempArr) {
                console.log()
                if (e.style.backgroundColor !== "white") {
                    
                    e.style.backgroundColor = "white";
                }
            }
        })
    }
    //fill all
    if (fillAllEl) {
        fillAllEl.addEventListener("click", function () {
            console.log("help")
            console.log(tempArr)
            
            for (let e of tempArr) {
                console.log()
                if (e.style.backgroundColor !== "null") {
                    console.log(color)
                    e.style.backgroundColor = setColor(props.color);
                }
            }
        })
    }

    // function fillUncolored() {
    //     console.log("here")
    //     let tempArr = document.querySelectorAll("grid-item")
    //     console.log(tempArr)
    //     for (let element of tempArr) {
    //         if (e.style.backgroundColor === "white") {
    //             e.style.backgroundColor = this.state.color
    //         }
    //     }
    // }


    return (
        <div id="grid-item" className="grid-item" style={{ backgroundColor: color }} onClick={changeColor} onMouseEnter={mouseDrag}></div>
    )

}

