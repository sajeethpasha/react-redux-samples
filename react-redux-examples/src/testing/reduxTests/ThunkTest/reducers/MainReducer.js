import { combineReducers } from 'redux';

import PersonAReducer from './PersonAReducer';
import PersonBReducer from './PersonBReducer';
import PersonCReducer from './PersonCReducer';
import PersonDReducer from './PersonDReducer';
import ThunkAsysnEReducer from './ThunkAsysnEReducer';
import ThunkAPITwoReducer from './ThunkAPITwoReducer';

const MainReducer = combineReducers({
perA:PersonAReducer,
perB:PersonBReducer,
perC:PersonCReducer,
perD:PersonDReducer,
thunAsyn: ThunkAsysnEReducer,
ThTwo:ThunkAPITwoReducer
  });

  export default MainReducer;