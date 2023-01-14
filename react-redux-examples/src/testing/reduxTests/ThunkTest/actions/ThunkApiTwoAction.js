import { THUNK_API_TWO_SUCCESS } from "../reducers/ConstThunk";


const ThunkApiTwoAction= (id)=>{

const helloResponse=(json)=>{
   return{  type:THUNK_API_TWO_SUCCESS,
    success:json,
    time:new Date().toISOString()
   }
}
return dispatch =>{

    
    fetch('https://jsonplaceholder.typicode.com/users/'+id)
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

export default ThunkApiTwoAction;