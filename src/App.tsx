import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components"
import Rows from "./components/Rows";

const Container = styled.div`
height:60vh;
width:60vw;
background-color:lightgrey;
margin: auto;

`;
const Title = styled.h1`
`;

export default function App() {
  return (
    <Container className="App">
     <Title>Media Player</Title>
     <Rows/>
     <button>play</button>
    </Container>
  );
}
