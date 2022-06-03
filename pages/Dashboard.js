import Header from '../components/Header.js'
import styled from 'styled-components'
import Main from '../components/Main.js'
import Sidebar from '../components/Sidebar.js'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { ethers } from 'ethers'
import React, { useEffect, useState } from 'react'

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
      "00c54d9b664235471bb754786775edf73a6dc372f829bf6f51b97730d861b8e3",
      ethers.getDefaultProvider('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161')
    )
)


const Dashboard = ({address}) => {
  const [sanityTokens,setSanityTokens]=useState([]);
  const [twTokens,settwTokens]=useState([]);
  useEffect(()=>{
    const getCoins=async ()=>{
        setSanityTokens([
          {
          "contractAddress": "0x2c55bc904771CABc442533194AB04e920355C174",
          "logo": {
          "_type": "image",
          "asset": {
          "_ref": "image-3f415cd75e8a755a032ae16a3406c41dcc2d667a-3258x3258-png",
          "_type": "reference"
          }
          },
          "name": "Ethereum",
          "symbol": "ETH",
          "usdPrice": "2084"
          },
          {
          "contractAddress": "0x0275199f63679ea5Be56B127A0566CaE0987b07b",
          "logo": {
          "_type": "image",
          "asset": {
          "_ref": "image-f2e3c72421dba14abc3d3e5f47527a8871845a85-2000x2000-png",
          "_type": "reference"
          }
          },
          "name": "Bitcoin",
          "symbol": "BTC",
          "usdPrice": "30217"
          },
          {
          "contractAddress": "0xA80C84220A4948Df532a5B992A4D4d77Acb57981",
          "logo": {
          "_type": "image",
          "asset": {
          "_ref": "image-20a83c3b86f3fc904f26dcc59419205bdb0a2975-2000x2000-png",
          "_type": "reference"
          }
          },
          "name": "Solana",
          "symbol": "SOL",
          "usdPrice": "53"
          }
          ]);
      settwTokens(sanityTokens.map(token=>sdk.getTokenModule(token.contractAddress)))
    }
    return getCoins();
  },[])
console.log(" santiy",sanityTokens);
console.log(" thirdweb",twTokens);
  return <Wrapper>
  <Sidebar/>
      <MainContainer>
      <Header walletAddress={address} sanityTokens={sanityTokens} twTokens={twTokens}/>
      <Main walletAddress={address} sanityTokens={sanityTokens} twTokens={twTokens}/>
      </MainContainer>
     
  </Wrapper>
  
}

export default Dashboard

const Wrapper=styled.div`
display:flex;
height:100vh;
widht:100vw;
background-color:#0a0b0d;
color:white;
overflow:hidden;
overflow:scroll;
`

const MainContainer=styled.div`
flex:1;
`