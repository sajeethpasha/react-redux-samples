import { THUN_ASYN_E_ERROR, THUN_ASYN_E_SUCCESS } from "./ConstThunk";

const ThunkAsysnEReducer = (state = {}, action) => {
    console.log("ThunkAsysnEReducer is:"+JSON.stringify(action))
    switch (action.type) {
        case THUN_ASYN_E_SUCCESS:
            const t= {
                ...state,
                ...action,                
                
            }
            console.log("return ThunkAsysnEReducer  Reducer"+JSON.stringify(t));
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

export default ThunkAsysnEReducer;