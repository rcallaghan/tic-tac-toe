import React, { Component } from 'react'
import styled from 'styled-components'
import getWinner from '../../helpers/getwinner'

import GameCell from '../GameCell'
import ResultOverlay from '../ResultOverlay'

const Board = styled.div`
    max-width: 800px;
    margin: 25px auto;
    padding: 15px;
    position: relative;
`

const BoardRow = styled.div`
    border-bottom: 1px solid #383e49;
    display: flex;
    margin: 0;
    overflow: hidden;

    &:last-of-type {
        border: none;
    }

`
export default class GameBoard extends Component {
    constructor() {
        super()
        this.state = {
            cells: Array(9).fill(null),
            xIsNext: true,
            result: null
        }
        this.playAgain = this.playAgain.bind(this)
    }

    renderCells(i) {
        const cells = this.state.cells
        return <GameCell value={cells[i]} makeMove={() => {this.handleClick(i)}} />
    }

    handleClick(i){
        let cells = this.state.cells
        let winner = getWinner(cells)

        if(winner || cells[i]) {
            return
        }
        
        let updatedBoard = cells
        updatedBoard[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            cells: updatedBoard,
            xIsNext: !this.state.xIsNext,
            result: winner
        })

        this.checkforResult(cells)
    }

    checkforResult(cells) {
        let winner = getWinner(cells)
        let draw = cells.every(item => item != null)
        
        this.setState({
            result: winner ? `Player ${winner} has won the game!` : "" || draw ? "This game ended in a draw!" : ""
        })
    }
    
    playAgain() {
        this.setState({
            cells: Array(9).fill(null),
            result: null
        })
    }
    
    render() {
        return (
            <Board>
               { this.state.result && <ResultOverlay result={this.state.result} replay={this.playAgain} /> }
                <BoardRow>
                    {this.renderCells(0)}
                    {this.renderCells(1)}
                    {this.renderCells(2)}
                </BoardRow>
                <BoardRow>
                    {this.renderCells(3)}
                    {this.renderCells(4)}
                    {this.renderCells(5)}
                </BoardRow>
                <BoardRow>
                    {this.renderCells(6)}
                    {this.renderCells(7)}
                    {this.renderCells(8)}
                </BoardRow>
            </Board>
        )
    }
}