import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar"
import Home from './Components/Home/Home';
import Signup from "./Components/Signup/Signup"
import Login from "./Components/Login/Login"

function App() {
  return (
    <div className="App">
              <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Signup" element={<Signup/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
