import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from './components/Header/Header';
import CreateEmployee from './views/CreateEmployee/CreateEmployee';
import CurrentEmployee from './views/CurrentEmployee/CurrentEmployee';
const App = () => {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route exact path='/' element={<CreateEmployee/>} />
            <Route exact path='/employee-list' element={<CurrentEmployee/>} />
        </Routes>
    </Router>
  );
}

export default App;
