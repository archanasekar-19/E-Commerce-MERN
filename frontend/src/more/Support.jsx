import React, { useRef, useState } from 'react'
import { Send } from '@material-ui/icons'
import styled from 'styled-components'


const Container=styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
margin-top:150px;

`
const Title=styled.h2`
font-size:40px;
margin-bottom:20px;
font-family : "Urbanist";
letter-spacing:2px;

`
const Desc=styled.div`
font-size:24px;
font-weight:300;
margin-bottom:20px;


`
const InputContainer=styled.div`
width:30%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid lightgray;


`;
const Input=styled.input`
border:none;
flex:8;
padding-left:20px;



`;

const Button=styled.button`
flex:1;
background-color:teal;
color:white;
border:none;

`;

const Newsletter = () => {
    const [done, setDone] = useState(false);
  return (
    <Container>
        <Title>NEWSLETTER</Title>
        <Desc>GET TIMELY UPDATES FROM THE PRODUCTS</Desc>
        <InputContainer>
             <Input placeholder="Your MailID"/>
             <Button>
             <Send/>

            </Button>
           

        </InputContainer>

    </Container>
  )
}

export default Newsletter
