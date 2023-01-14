import { PER_B } from "./ConstThunk";


const PersonBReducer = (state = {count:0}, action) => {
    console.log("PersonBReducer is:"+JSON.stringify(action))
    switch (action.type) {
        case PER_B:
            const t= {
                ...state,
                name:action.name,
                count:action.count+state.count
            }
            console.log("return PersonBReducer  Reducer"+JSON.stringify(t));
            return t;
        default:
            return state;
    }
};

export default PersonBReducer;