import React from 'react'

export default function boardState(squarePositions) {
    for(var i = 0; i<squarePositions.length; i++){
        /* black pieces*/
        if(squarePositions[i].props.loc[0] === '8')
        {
            for(var l = 0; l<8; l++)
            {
                if(l === 0 || l=== 7)
                {
                    squarePositions[i] = React.cloneElement(squarePositions[i], {piece: "br"})
                }
                if(l === 1 || l=== 6)
                {
                    squarePositions[i] = React.cloneElement(squarePositions[i], {piece: "bb"})
                }
                if(l === 2 || l=== 5)
                {
                    squarePositions[i] = React.cloneElement(squarePositions[i], {piece: "bn"})
                }
                if(l === 3)
                {
                    squarePositions[i] = React.cloneElement(squarePositions[i], {piece: "bq"})
                }
                if(l === 4)
                {
                    squarePositions[i] = React.cloneElement(squarePositions[i], {piece: "bk"})
                }
                i++;
            }
        }
        if(squarePositions[i].props.loc[0] === '7')
        {
            squarePositions[i] = React.cloneElement(squarePositions[i], {piece: "bp"})
        } 

        /*white pieces*/
        if(squarePositions[i].props.loc[0] === '2'){
            squarePositions[i] = React.cloneElement(squarePositions[i], {piece: "wp"})
        }
        if(squarePositions[i].props.loc[0] === '1'){
            for(var l = 0; l<8; l++)
            {
                if(l === 0 || l=== 7)
                {
                    squarePositions[i] = React.cloneElement(squarePositions[i], {piece: "wr"})
                }
                if(l === 1 || l=== 6)
                {
                    squarePositions[i] = React.cloneElement(squarePositions[i], {piece: "wb"})
                }
                if(l === 2 || l=== 5)
                {
                    squarePositions[i] = React.cloneElement(squarePositions[i], {piece: "wn"})
                }
                if(l === 3)
                {
                    squarePositions[i] = React.cloneElement(squarePositions[i], {piece: "wq"})
                }
                if(l === 4)
                {
                    squarePositions[i] = React.cloneElement(squarePositions[i], {piece: "wk"})
                }
                i++;
            }
            
        }
        
    }
}
