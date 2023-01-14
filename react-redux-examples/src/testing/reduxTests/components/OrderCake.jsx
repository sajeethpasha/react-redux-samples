import React from "react";
import { Connect, connect } from "react-redux";
// import 

const OrderCake=(props)=>{

    return (
        <div>
       <h2>Number of Cakes ordered: {props.count}</h2>
         <button onClick={props.ordCake}> order cake</button>
         <button onClick={props.caneclCake}> cancel cake</button>

        </div>
    );
}

const mapStateToProps=state=>{
    return{
        count:state
    }
}

const mapDispatchToProps=dispatch =>{
    return {
        ordCake:()=>dispatch({
            type: "INCREMENT" ,
            payload: {
                age:4,
                name:"sajeeth",
                count: 1
            }           
        }),
        caneclCake:()=>dispatch({
            type:"DECREMENT",
            payload:{
                age:4,
                name:"sajeeth",
                count: 1
            }   
           })
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(OrderCake)