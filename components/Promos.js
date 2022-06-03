import React from 'react'
import styled from "styled-components";
const Promos = () => {
  return (
    <Wrapper>
        <OfferCard>
            <Title>Yield Earned</Title>
            <Description>Earn up to 2% APY on your crypto</Description>
            <Placeholder></Placeholder>
            <Addi style={{fontSize:'1.5rem'}}>
                $0.000066 <span>2.84% APY</span>
            </Addi>
        </OfferCard>
        <OfferCard>
            <Title>Learn and Earn</Title>
            <Description>Earn up to 2% APY on your crypto</Description>
            <Placeholder></Placeholder>
            <Addi style={{color:'#3773f5'}}>
                Verify identity
            </Addi>
        </OfferCard>
    </Wrapper>
  )
}

export default Promos

const Wrapper=styled.div`
margin-top:2rem;
padding-right:1rem;
`

const OfferCard=styled.div`
widht:21rem;
height:11rem;
border:1px solid #282b2f;
margin-bottom:1rem;
padding:1.5rem;
display:flex;
flex-direction:column;

`

const Title=styled.div`
font-weight:700;
font-size:1.5rem;
margin-bottom:01.rem;
`

const Description=styled.div`
font-size:1.1rem;

`
const Placeholder=styled.div`

flex:1;
`

const Addi=styled.div`
font-size:1.1rem;
font-weight:700;
display:flex;
align-items:center;
justify-content:space-between;

& >span{
    color:#8a919e !important;
    font-size:1rem;
}
`
