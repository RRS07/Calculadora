import React from "react";
import "./calculadora.css"
import Container from '@mui/material/Container';
import { Box } from "@mui/system";
import { useState } from "react";
export default function Calculadora(){
    const [num,setNum] = useState(0);
    const [oldNum,setOldNum] = useState(0);
    const [operator,setOperator] = useState(0);
    function inputNum(e){
    var input=e.target.value;
    if(num===0){
        setNum(input);
    }else{
        setNum(num+input); 
    }
    }
    function clear(e){
        setNum(0)
    }
    function porcentagem(){
        setNum(num / 100)
    }
    function MundacaoDeSinal(){
        if(num>0){
            setNum(-num)
        }
        else{
            setNum(Math.abs(num))
        }
    }
    function operatorhandler(e){
        var operatorInput = e.target.value
        setOperator(operatorInput)
        setOldNum(num)
        setNum(0)
    }
    function calculo(){
        if(operator==="/"){
            setNum(oldNum / num);}
        else if(operator==="+"){
            setNum(parseFloat(oldNum) + parseFloat(num))
        }
        else if(operator==="x"){
            setNum(oldNum * num)
        }
        else if(operator==="-"){
            setNum(oldNum - num)
        }
        

    }
return(
<div>
        <Box m={12}/>
    <Container maxWidth="xs">
<div className="wrapper">
<h1 className="resultado">{num}</h1>
<button onClick={clear}>AC</button>
<button onClick={MundacaoDeSinal}>+/-</button>
<button onClick={porcentagem}>%</button>
<button className="orange"onClick={operatorhandler} value={"/"}>/</button>
<button  className="gray" onClick={inputNum} value={7}>7</button>
<button className="gray"onClick={inputNum} value={8} >8</button>
<button className="gray"onClick={inputNum} value={9}>9</button>
<button className="orange" onClick={operatorhandler} value={"x"}>X</button>
<button className="gray"onClick={inputNum} value={4}  >4</button>
<button className="gray"onClick={inputNum} value={5} >5</button>
<button className="gray"onClick={inputNum} value={6}>6</button>
<button className="orange"onClick={operatorhandler} value={"-"}>-</button>
<button className="gray"onClick={inputNum} value={1}>1</button>
<button className="gray"onClick={inputNum} value={2}>2</button>
<button className="gray"onClick={inputNum} value={3}>3</button>
<button className="orange"onClick={operatorhandler} value={"+"}>+</button>
<button className="gray" id="zero"onClick={inputNum} value={0}>0</button>
<button className="gray" onClick={inputNum} value={"."}>,</button>
<button className="orange"onClick={calculo} value={"="}>=</button>
</div>
</Container>
     </div>
)
}

    
    
        