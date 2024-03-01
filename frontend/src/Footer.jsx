import { Facebook, Instagram,MailOutline, Phone, Room, WhatsApp } from '@material-ui/icons'
import styled from "styled-components";
import React from 'react'
import { Link } from 'react-router-dom';


const Container=styled.div`
display:flex;


`
const Left=styled.div`
flex:1;
display:flex;;
flex-direction:column;
padding:20px;
`
const Center=styled.div`
flex:1;
padding:20px;


`;
const Logo=styled.h2`
font-family: 'Urbanist';
font-weight:"bold";

`;
const Desc=styled.p`
margin:20px 0px;
display:flex-wrap;
font-family: 'Urbanist';



`;
const SocialContainer=styled.div`
display:flex;
font-family: 'Urbanist';


`;
const SocialIcon=styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin:5px;



`;

const Right=styled.div`
flex:1;
padding:20px;
font-family: 'Urbanist';


`

const Title=styled.h3`
margin-bottom:30px;
font-family: 'Urbanist';


`;



const List=styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;

`;

const ListItem=styled.li`
width:50%;
margin-bottom:10px;


`;

const ContactItem=styled.div`
margin-bottom:10px;
display:flex;
align-items:center;



`
const Payment=styled.img`
width:60%;
margin-top:0;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>NSK MEDITECH</Logo>
            <Desc>
            'NSK Meditech" are a Partnership Firm, as the Manufacturer, 
            Wholesaler, Supplier and Retailer of PPE Kit, Surgeon gown, 
            Isolation gown, Scrub suit, Surgical drapes and many more.
            Our products are high in demand due to their premium quality and affordable prices. 
            Furthermore, we ensure to timely deliver these products to our clients, through this 
            we have gained a huge clients base in the market.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>

                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>

                <SocialIcon color="55ACEE">
                    <WhatsApp/>
                </SocialIcon>
            </SocialContainer>

        </Left>


        <Center>
            <Title>Useful Links</Title>
            <List>
            <ListItem><Link to="/">Home</Link></ListItem>
            <ListItem><Link to="/cart">Cart</Link></ListItem> 
            <ListItem><Link to="/products">Products</Link></ListItem>
            <ListItem><Link to="/login">Login</Link></ListItem>
            <ListItem>Logout</ListItem>
            <ListItem><Link to="/login">Register</Link></ListItem>
            <ListItem>Terms</ListItem>
                
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/> 411,Thiyagaraya New Street,Coimbatore</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/> +91 9942231432</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/> santhoshkmhs@gmail.com</ContactItem>
            <Payment style={{height:"30px"}} src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>

    </Container>
  )
}

export default Footer
