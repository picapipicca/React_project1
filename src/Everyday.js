import React from "react";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';


const Everyday = (props) => {
    let history= useHistory();
    //요일 만들기
    const day = ["일","월","화","수","목","금","토"];

        //1~5 랜덤숫자 7개 새로운 배열안에 집어넣기
    const arr = [];
    for (let i =0; i<day.length; i++) { 
        const random_num = Math.floor(Math.random()*(5));
        arr.push(random_num);
    }
    const circle = [0,0,0,0,0]

    return(
        <>
        <h3>내 일주일은?</h3>
        {day.map((day,i) => {
            return(
                <Box key={day}>
                    <h3 style={{margin : "10px"}}>{day}</h3>
                    {circle.map((circle,index)=>{
                    return <Circle key={circle[i]} className={index <= arr[i] ? "active" : null } />})}
                    <ArrowRight onClick = {()=> {
                        history.push(`/rating/${day}`)
                    }}/>
                </Box>
            );
        })}
        
    </>
    );
       
       
        }

const Box = styled.div`
    height: 40px;
    padding: 5px;
    margin: 8px;
    display: flex;
    justify-content : center 

`;   
const Circle = styled.div `
    margin: 3px;
    width : 35px;
    height: 35px;
    background-color: #a4a1a1;
    border-radius: 250px;
    &.active {
    background-color: yellow;
    }

`;
const ArrowRight=styled.div`
    margin-left: 10px;
	width: 0;
	height: 0;
	border-top: 20px solid transparent;
	border-bottom: 20px solid transparent;
	border-left: 20px solid purple;
`;

export default Everyday;