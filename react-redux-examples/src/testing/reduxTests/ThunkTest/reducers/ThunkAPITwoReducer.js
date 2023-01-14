import { THUNK_API_TWO_SUCCESS, THUN_ASYN_E_ERROR } from "./ConstThunk";

const ThunkAPITwoReducer = (state = {}, action) => {
    console.log("ThunkAPITwoReducer is:"+JSON.stringify(action))
    switch (action.type) {
        case THUNK_API_TWO_SUCCESS:
            const t= {
                ...state,
                ...action,                
                
            }
            console.log("return ThunkAPITwoReducer  Reducer"+JSON.stringify(t));
            return t;
        case THUN_ASYN_E_ERROR:
            return {
                ...state,
                fail:action
            }


        default:
            return state;
    }
};

export default ThunkAPITwoReducer;