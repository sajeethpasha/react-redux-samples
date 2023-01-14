import { THUN_ASYN_E_SUCCESS } from "../reducers/ConstThunk";


const ThunkApiAction= ()=>{

const helloResponse=(json)=>{
   return{  type:THUN_ASYN_E_SUCCESS,
    success:json,
    time:new Date().toISOString()
   }
}
return dispatch =>{

    
    fetch('http://5afa7456edf5520014cbd352.mockapi.io/hello-world')
      .then(response => {
        return response;
      })
      .then(response => response.json())
      .then(json => {
        // dispatch(isLoading(false));
        dispatch(helloResponse(json));
      });


}

}

export default ThunkApiAction;