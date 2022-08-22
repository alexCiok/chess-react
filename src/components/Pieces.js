import React from 'react'
import './Pieces.css'
import Chessboard from './Chessboard'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDrag } from 'react-dnd'

import wp from "./images/wp.png"
import bn from "./images/bn.png"
import bk from "./images/bk.png"
import bp from "./images/bp.png"
import bq from "./images/bq.png"
import br from "./images/br.png"
import wb from "./images/wb.png"
import wk from "./images/wk.png"
import wn from "./images/wn.png"
import wq from "./images/wq.png"
import wr from "./images/wr.png"
import bb from "./images/bb.png"

let images = {wp,bn,bk,bp,bq,br,wb,wk,wn,wq,wr,bb};

class Pieces extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        name: "wp",
      }
    }        
    render() {       
    return (    
        <div key={this.props.name}>
          <img src={images[`${this.props.name}`]}
          alt={this.props.name}
          ></img>
        </div>
    )
  }  
}
export default Pieces;