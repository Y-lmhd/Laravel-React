
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Welcome from './components/welcome';
import WelcomeOld from './components/WelcomeOld';
import Login from './components/Login';
import Photos from "./components/Photos";

function App() {
  return (
    <div className="App">


      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/welcome">welcome</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/photos">photos</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/welcome" element={
            <>
              <WelcomeOld brand="BMW" year="2005" />
              <WelcomeOld brand="Audi" year="2012" />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;


