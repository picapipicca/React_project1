import React from "react";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';


const Everyday = (props) => {
    let history= useHistory();

    //요일 array
    const day = ["일","월","화","수","목","금","토"];

    //7개의 랜덤숫자(1~5) 빈 배열에 집어넣기
    const arr = [];
    for (let i =0; i<day.length; i++) { 
        const random_num = Math.floor(Math.random()*(5));
        console.log(random_num)
        arr.push(random_num);
    }
        const circles = Array.from ({length:5},(v,i) => i);
        console.log(circles);

    //뷰로 나타나는 부분
    return(
        <>
        <h3>내 일주일은?</h3>

         {/* callback 함수를 day array의 data 수만큼 불러 함수의 반환값으로 새로운 배열생성 */}
        {day.map((day,i) => {
            return(
                <Box key={i}>
                    <h3 style={{margin : "10px"}}>{day}</h3>
                    {day.from}
                    {circles.map((circle,index)=>{
                    return <Circle key={index} className={index <= arr[i] ? "active" : null } />})}

                    {/* 다른방법 : 원 5개를 랜덤으로 불러온 (1~5) 숫자보다 같거나 작으면 노란색으로 칠해준다 5개동그라미 각각실행 
                    {/* <Circle className={1 <= arr[i] ? "active" : null }/> 
                    <Circle className={2 <= arr[i] ? "active" : null }/>
                    <Circle className={3 <= arr[i] ? "active" : null }/>
                    <Circle className={4 <= arr[i] ? "active" : null }/>
                    <Circle className={5 <= arr[i] ? "active" : null }/> */}

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