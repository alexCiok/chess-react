import React, {useRef} from 'react'
import './Chessboard.css'
import Square from './Square'
import boardState from './boardState'

export default function Chessboard(props) {
    /* creates the axis*/
    const verticalAxis = [1,2,3,4,5,6,7,8].reverse();
    const horizontalAxis = ['a','b','c','d','e','f','g','h'];
    const allSquares = []
    const white_squares = ['8a','8c','8e','8g',
                            '7b','7d','7f','7h',
                            '6a','6c','6e','6g',
                            '5b','5d','5f','5h',
                            '4a','4c','4e','4g',
                            '3b','3d','3f','3h',
                            '2a','2c','2e','2g',
                            '1b','1d','1f','1h'];
    for(let i = 0; i<verticalAxis.length; i++)
    {
        for(let j = 0; j<horizontalAxis.length; j++)
            allSquares.push(verticalAxis[i]+""+horizontalAxis[j]);
    }
    /* generates all squares for the chessboard*/ 
    const squarePositions = allSquares.map((squareId)=>
    <Square loc={squareId} isWhite={white_squares.includes(squareId)?'white':'black'}/>)   
    boardState(squarePositions);
    
    return (
    <>
    <div className='flex-container'>
        <div className='Chessboard'>
            {squarePositions}
        </div>
    </div>
    </>
  )
}
