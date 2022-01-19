import logo from './logo.svg';
import './App.css';
import { Component, useEffect } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      //default table values
      rows: 0,
      columns: 1,
      color: "black",
      isFilled: false,
      mouseDown: false
    });
    //this.fillUncolored = this.fillUncolored.bind(this)
  }

  //Functions for buttons
  addRows = () => {
    console.log(this.color)
    this.setState(prev => ({ rows: prev.rows + 1 }))

  }

  addColumns = () => {
    this.setState(prev => ({ columns: prev.columns + 1 }))
  }

  deleteRow = () => {

    this.setState(prev => ({ rows: prev.rows - 1 }))

  }

  deleteColumn = () => {

    this.setState(prev => ({ columns: prev.columns - 1 }))

  }

  changeColor = (e) => {
    //console.log(this.columns)
    let modifiedColor = e.target.value
    //console.log(e.target.value)
    this.setState({ color: modifiedColor })

  }

  // fillCells = () => {
  //   this.setState({ isFilled: true })
  // }


  render() {
    return (
      <div id="body" onMouseDown={this.mouseDrag} onMouseUp={this.mouseDrag}>
        <div id="all-btns">
          <button onClick={this.addRows} id="rowBtn" className="btns"> Add Row</button>
          <button onClick={this.addColumns} id="colBtn" className="btns">Add Column</button>
          <button onClick={this.deleteRow} id="delRow" className="btns">Delete Row</button>
          <button onClick={this.deleteColumn} id="delCol" className="btns">Delete Column</button>
          <button id="fillBtn" className="btns">Fill all</button>
          <button id="resetBtn" className="btns">Reset Color</button>
          <button id="fillEmpty" className="btns">Fill Empty</button>
          <form>
            <label id="dropDown">Choose a Color</label>
            <input type="color" id="colorInput" onChange={this.changeColor.bind(this)} />
          </form>
        </div>

        <div id="container" draggable="false">

          <Table className="box" state={this.state}>

          </Table>
        </div>

      </div>
    )

  }
}
