import './App.css';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { history } from './helpers/history';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import CreateEmployee from './views/CreateEmployee/CreateEmployee';
import CurrentEmployee from './views/CurrentEmployee/CurrentEmployee';

/**
 * @function App
 * @returns Main app
 */
const App = () => {
  const [styleData, setStyle] = useState({
    mySidenav: "",
    main: "",
  });
  return (
    <Router history={history}>
        <Header  setStyle={setStyle}/>
        <Sidebar style={styleData} setStyle={setStyle}/>
        <Routes>
            <Route exact path='/' element={<CreateEmployee style={styleData} />} />
            <Route exact path='/employee-list' element={<CurrentEmployee style={styleData} />}/>
        </Routes>
    </Router>
  );
}

export default App;
