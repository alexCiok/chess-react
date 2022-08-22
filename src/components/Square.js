import React, {useState} from 'react'
import './Square.css'
import Pieces from './Pieces'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DragSource, DragPreviewImage, useDrag, useDrop} from 'react-dnd'

const Square = (props) =>{
    
    const [loc, setLoc] = useState(props.loc);
    const [piece, setPiece] = useState(props.piece);
    const [isWhite, setIsWhite] = useState(props.isWhite);    
    /*
    constructor(props){
        super(props)
        this.state = {
            loc:'1a',
            piece: 'none',
            isWhite: 'white',            
        }
    }    
    render(){
    */

        //TODO : IMPLEMENT DRAG'n'DROP 
        //Drag image from one square to another and update target square w/ dragged square props 
    const onDrop = (e) => {
        var data = e.dataTransfer.getData("text");       
        console.log(data.name);
      }
      const [collected, drag, dragPreview] = useDrag(() => ({
        type: 'PIECE',
        item:  "id" 
      }))
      const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'PIECE',
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop()
        })
      }))
      //removed this.props from all below references
      return (
        <DndProvider backend={HTML5Backend}>
            <div key={loc} id = {loc} className={`${isWhite} square flex-container`}>
                <Pieces name={piece} draggable='true' ref={drag} {...collected}/>
            </div>
        </DndProvider>
        )
};
export default Square;