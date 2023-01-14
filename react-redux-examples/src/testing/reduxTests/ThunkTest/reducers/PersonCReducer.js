
import { PER_C } from "./ConstThunk";


const initState= {
    name:"Person C",
    count: 1
}

const PersonCReducer = (state = initState, action) => {
    console.log("PersonCReducer is:"+JSON.stringify(action))
    switch (action.type) {
        case PER_C:
            const t= {
                ...state,
                name:action.name,
                count:action.count+state.count
            }
            console.log("return PersonCReducer  Reducer"+JSON.stringify(t));
            return t;
        default:
            return state;
    }
};

export default PersonCReducer;