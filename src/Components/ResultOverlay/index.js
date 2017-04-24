import React from 'react'
import styled from 'styled-components'

const Result = styled.div`
    align-items: center;
    background: rgba(255,255,255,0.90);
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    padding: 0 20px;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 1s ease;
`

const Title = styled.h1`
`

const Button = styled.button`
    background: transparent;
    border: 1px solid #25df88;
    border-radius: 24px;
    color: #25df88;
    cursor: pointer;
    font-size: 16px;
    line-height: 18px;
    padding: 10px 15px;
    text-transform: uppercase;
    transition: background 1s ease;

    &:hover, &:focus {
        background: #25df88;
        border-radius: 0;
        color: #fff;
        transition: border-radius 0.5s ease;
    }
`

const ResultOverlay = ({result, replay }) => {
    return (
        <Result>
            <Title>
                {result}
            </Title>
            <Button onClick={replay}>Play Again</Button>
        </Result>
    )
}

export default ResultOverlay