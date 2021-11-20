import React from "react";
import styled from "styled-components";
import { useHistory , useParams } from "react-router-dom";


const Rating = (props) => {
    const history = useHistory();
    const params = useParams();
    const [rate,setRate] = React.useState(0);

    return (
        <>
            <h3>
                <span style={{
                    backgroundColor: "#abed6d",
                    borderRadius:"10px",
                    padding: "5px",
                    margin: "5px",

                }}>{params.day}요일</span>평점을 남겨볼까요~?
            </h3>
            {/* 동그라미를 눌러서 평점 입력하기 (1번째 동그라미 누르면 1점, 3번째 동그라미 누르면 3점)
            동그라미 다섯개 -> 클릭시 동그라미 인덱스 수만큼 칠해지고 클릭되게 구현 -> 기능 eventlistener, button click ? mouseover? */}

            <Box  >
            {[0,0,0,0,0].map((circle, index) => {
                return(
                    <div style = {{
                        margin: "3px",
                        width : "35px",
                        height: "35px",
                        backgroundColor: rate <= index ? "#a4a1a1" : "yellow",
                        borderRadius: "250px",
                    }} key={index} 
                        onClick= {() => {
                        setRate(index+1);
                    }}></div> 
                )})}
            </Box>
             
            
            <button style={{
                backgroundColor:"#7eb7f7",
                border: "none",
                width: "200px",
                height: "46px",
                color: "white",
                padding: "10px",
                margin: "10px",
                borderRadius:"10px",
            }} onClick = {()=> {history.goBack("/rating");}}> 평점 남기기 </button>
        </>

        
        
    );
};
const Box = styled.div`
    display: flex;
    justify-content : center ;
    margin: 20px;
`;


export default Rating;