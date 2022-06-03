import React from 'react'
import Portfolio from './Portfolio.js'
import styled from 'styled-components'
import Promos from  "./Promos.js"
const Main = ({walletAddress, sanityTokens ,twTokens}) => {
  return (
    <Wrapper>
     <Portfolio
        twTokens={twTokens}
        sanityTokens={sanityTokens}
        walletAddress={walletAddress}
      />
        <Promos/>
    </Wrapper>
  )
}

export default Main

const Wrapper=styled.div`
display:flex;
max-height:calc(100vh-64px);
overflow:hidden;
overflow-y:scroll;
::-webkit-scrollbar{
  display:none;
}
& div{
    border-radius:0.4rem;
}
`