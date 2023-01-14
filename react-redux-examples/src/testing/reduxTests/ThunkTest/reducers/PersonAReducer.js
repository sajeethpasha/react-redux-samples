import { PER_A } from "./ConstThunk";

const PersonAReducer = (state = {count:0}, action) => {
    console.log("PersonAReducer is:"+JSON.stringify(action))
    switch (action.type) {
        case PER_A:
           const t= {
            ...state,
            name:action.name,
            count:action.count+state.count
        }
        console.log("return PersonAReducer  Reducer"+JSON.stringify(t));
        return t;
        default:
            return state;
    }
};

export default PersonAReducer;