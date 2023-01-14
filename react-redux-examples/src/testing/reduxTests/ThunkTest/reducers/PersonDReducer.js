import { PER_D, PER_D_TEXT } from "./ConstThunk";


const PersonDReducer = (state = {count:5}, action) => {
    console.log("PersonDReducer is:"+JSON.stringify(action))
    switch (action.type) {
        case PER_D:
            const t= {
                ...state,
                name:action.name,
                count:action.count+state.count
            }
            console.log("return PersonDReducer  Reducer"+JSON.stringify(t));
            return t;
        case PER_D_TEXT:
            return {
                ...state,
                name:action.name
            }


        default:
            return state;
    }
};

export default PersonDReducer;