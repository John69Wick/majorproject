import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {coins} from '../static/coins.js'
import Coin from './Coin.js'
import BalanceChart from './BalanceChart.js'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { ethers } from 'ethers'

const Portfolio = ({walletAddress, sanityTokens ,twTokens}) => {
  const [walletBalance,setWalletBalance]=useState(0);
  
  const tokentoUSD={};
  for(const token of sanityTokens){
    tokentoUSD[token.contractAddress]=Number(token.usdPrice);
  }
  console.log(tokentoUSD+" portfolio balance");
  useEffect(()=>{
    const calculateTotalBalance=async ()=>{
      const totalBalance=await Promise.all(
        twTokens.map(async token=>{
          const balance=await token.balanceOf(walletAddress);
          return Number(balance.displayValue)*tokentoUSD[token.address];
        })
      )
      console.log(totalBalance+" final balance");
      const finalBalance=totalBalance.reduce((acc,curr)=>acc+curr,0);
      console.log(finalBalance+"  answer");
      setWalletBalance(finalBalance);
    }
    return calculateTotalBalance();
  },[twTokens,sanityTokens])
  return (
    <Wrapper>
    <Content>
    <Chart>
      <div>
        <Balance>
          <BalanceTitle>Portfolio Balance</BalanceTitle>
           <BalanceValue>
             {'$'
             }{walletBalance.toLocaleString()}
           </BalanceValue>
       </Balance>
      </div>
      <BalanceChart/>
    </Chart>
    
      <PortTable>
        <TItem>
            <Title>Your assets</Title>
        </TItem>
        <Divider></Divider>
        <Table>
          <TItem>
            <TableRow>
              <div style={{flex:3}}>Name</div>
              <div style={{flex:2}}>Balance</div>
              <div style={{flex:1}}>Price</div>
              <div style={{flex:1}}>Allocation</div>
              <div style={{flex:0}}><BsThreeDotsVertical/></div>
            </TableRow>
          </TItem>
          <Divider/>
          
          <div>
          {coins.map(coin => (
            <div key={coin.name}>
               
              <Coin coin={coin}/>
              
              <Divider/>
            </div>
          ))}
          </div>
        </Table>
    </PortTable>
    </Content>
    </Wrapper>
    
  )
}

export default Portfolio


const Wrapper=styled.div`
flex:1;
display:flex;
justify-content:center;
`

const Content=styled.div`
width:100%;
max-width:1000px;
padding:2rem 1rem;
`
const Chart=styled.div`
border:1px solid #282b2f;
padding:1rem 2rem;
`

const Balance=styled.div``
const BalanceTitle=styled.div`
color:#8a919e;
font-size:0.9rem;
`
const BalanceValue=styled.div`
font-size:1.8rem;
font-weight:700;
margin:0.5rem 0;
`
const PortTable=styled.div`
margin-top:1rem;
border:1px solid #282b2f;
`
const Table=styled.div`
width:100%;`

const TableRow=styled.div`
widht:100%;
display:flex;
justify-content:space-between;
&>th{
    text-align:left;
}

`

const TItem=styled.div`
padding:1rem 2rem
`

const Divider=styled.div`
border-bottom:1px solid #282b2f
`

const Title=styled.div`

font-size:1.5rem;
font-weight:600;

`