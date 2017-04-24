import React, { Component } from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import GameBoard from './Components/GameBoard'

const Wrapper = styled.div`
  box-sizing: border-box'
`
const Header = styled.header`
  background: #fff;
  box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
  padding: 10px 0;
`

const Branding = styled.img`
  display: block;
  max-width: 80px;
  margin: auto;
` 

class App extends Component {
  render() {
    return (
        <Wrapper>
          <Header>
              <Branding src={logo} alt="Airtame"/>
          </Header>

          <GameBoard />
        </Wrapper>
    );
  }
}

export default App;
