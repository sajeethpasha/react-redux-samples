import React, { useEffect, useRef } from "react";

import { connect, useDispatch } from "react-redux";
import { PER_A, PER_B, PER_C, PER_D, PER_D_TEXT } from "./reducers/ConstThunk";
import ThunkApiAction from "./actions/ThunkApiAction";
import ThunkApiTwoAction from "./actions/ThunkApiTwoAction";

const PersonesComponent=(props)=>{
    console.log("props are props:"+JSON.stringify(props));
    const inputRef = useRef(null)

    const inputIdRef = useRef(null)

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(ThunkApiAction())
    //  }, [])

    //  useEffect(() => {
    //     dispatch(ThunkApiTwoAction(id))
    //  }, [])

     const ThunkApiTwoActionClick=id=>{
        ThunkApiTwoAction(id)
     }

    
 const prA=props.perADet
 const prB=props.perBDet

 const prC=props.perCDet
 const prD=props.perDDet
  
 const thunAsynSucc=props.thunAsynDet
 const ThTwo=props.ThTwo
 console.log("ThTwo"+JSON.stringify(ThTwo));



return (
    <div>
        <div>
              <h2>Person A Details</h2>
              <div>{prA.count}</div>
              <button onClick={props.perACountInc}>click Person A</button>
        </div>
        <br/>

        <div>
              <h2>Person B Details</h2>
              <div>{prB.count}</div>
              <button onClick={props.perBCountInc}>click Person A</button>
        </div>
        <br/>

        
        <div>
              <h2>Person C Details</h2>
              <div>{prC.count}</div>
              <button onClick={props.perCCountInc}>click Person A</button>
        </div>
        <br/>
        
        <div>
              <h2>Person D count</h2>
              <div>{prD.count}</div>
              <button onClick={props.perDCountInc}>click Person A</button>
        </div>
        <br/>

        <div>
              <h2>Person D Test</h2>
              <div>{prD.name}</div>
              <input type="text" ref={inputRef} />
              <button onClick={()=>{
                console.log(inputRef.current.value);
                {props.perDText(inputRef.current.value)}
                }}>Get value</button>
        </div>
        <br/>

<h1> --------Thunk Examples----------</h1>
        <div>
              <h2>Thunk basic</h2>
              <div>{thunAsynSucc.time} </div>
              <button onClick=
                {props.thunkAsynkDisp}
                >Get value</button>
        </div>
        <br/>


        <h1> --------Thunk Examples With API call----------</h1>
        <div>
              <h2>Thunk API Two</h2>
              <input type="text" ref={inputIdRef} />
              <button onClick=
                {
                    
                ()=>{ 
                    
                    props.ThunkApiTwoAction(inputIdRef.current.value)
                    }

                }
                >Get Data </button>
                <div>
                   
                <div >
                    id:<a>{ThTwo?.success?.id}</a>
                    </div>

                    <div>
                    name:<a>{ThTwo?.success?.name}</a>
                    </div>

                    <div>
                    username:<a>{ThTwo?.success?.username}</a>
                    </div>

                    <div>
                    email:<a>{ThTwo?.success?.email}</a>
                    </div>
                    
                    


                </div>
        </div>
        <br/>
       
    </div>
);
}



const mapStateToProps=state=>{
    return{
        perADet:state.perA,
        perBDet:state.perB,
        perCDet:state.perC,
        perDDet:state.perD,
        thunAsynDet:state.thunAsyn,
        ThTwo:state.ThTwo, 
    }
}

const mapDispatchToProps=dispatch =>{
    return {
        perACountInc:()=>dispatch({
            type: PER_A ,
                 name:"Person A",
                 count: 1     
               
        }),

        perBCountInc:()=>dispatch({
            type: PER_B ,
            name:"Person B",
            count: 1             
        }),

        perCCountInc:()=>dispatch({
            type: PER_C ,
            name:"Person C",
            count: 1  
        }),


        perDCountInc:()=>dispatch({
            type: PER_D ,
            name:"Person D",
            count: 1                       
        }),

        perDText:(dta)=>dispatch({
            type: PER_D_TEXT ,
            name:dta,
                                  
        }),

         thunkAsynkDisp:()=>dispatch(ThunkApiAction() ),
        
         ThunkApiTwoAction:(id)=>dispatch(ThunkApiTwoAction(id))

        


    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PersonesComponent)
