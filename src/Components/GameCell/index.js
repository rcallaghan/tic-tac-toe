import React from 'react'
import styled from 'styled-components'

const Cell = styled.div`
    align-items: center;
    border-right: 1px solid #383e49;
    box-sizing: border-box;
    color: #e0e0e0;
    display: flex;
    font-size: 80px;
    font-weight: 300;
    justify-content: center;
    height: 125px;
    margin: 0;
    padding: 0;
    transition: all 1s ease
    text-align: center;
    width: 33.33%;

    @media (min-width: 768px) {
        height: 150px;
    }

    &:last-child {
        border-right: none;
    }
`
const Player = styled.span`
`

const GameCell = ({value, makeMove}) => {
    return (
        <Cell onClick={makeMove}>
           <Player>
               {value}
            </Player>
        </Cell>
    )
}
export default GameCell