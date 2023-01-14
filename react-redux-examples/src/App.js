import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,

} from 'react-router-dom';


import { Provider } from 'react-redux';



import { StoreThunk } from './testing/reduxTests/ThunkTest/StroreThunk';

import MainRedux from './testing/reduxTests/MainRedux';


const App = () => (
  <Provider store={StoreThunk}>
  <Router>
    <Navigation />
    <Content />
  </Router>
  </Provider>
);

const Navigation = () => (
  <ul>
   
    
    <li>
      <Link to="/rd"> Redux Test </Link>
    </li>    

    

  </ul>
);

const Content = () => (
  <Routes>

   <Route path="/" element={<MainRedux />} /> 
   <Route path="/rd" element={<MainRedux />} />
    
    
    
  </Routes>
);

const Home = () => <h1>My Home Page</h1>;

export default App;
