import React from 'react';
import styled from "styled-components";
import { Route } from 'react-router-dom';
import './App.css';
import Rating from './Rating';
import Everyday from './Everyday';

function App() {
  return (
    <div className="App">
     <Container>
        <Route path = "/" exact>
              <Everyday />
        </Route>
        <Route path ="/rating/:day" exact>
            <Rating/>
        </Route> 
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 350px; 
  width: 80vw; 
  height: 90vh; 
  margin: 5vh auto; 
  padding: 5vh 0px; 
  border: 1px solid rgb(221, 221, 221); 
  box-sizing: border-box; 
  border-radius: 5px;
`;


export default App;
