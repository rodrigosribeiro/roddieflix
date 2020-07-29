import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
    background-color: orange;
    margin-top: -94px ;
    min-height: 100vh;
    color: white;
`

function Pagina404() {

  return (
    <Main>
      <h2 style = {{textAlign: 'center'}}>404 - Esta página não pode ser encontrada</h2>
      <iframe title='game' src="https://mariosouto.com/flappy-bird-devsoutinho/" width="340" height="600" overflow = "hidden"></iframe> 
    </Main>
    )
}

export default Pagina404