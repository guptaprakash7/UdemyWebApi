import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Activity from "./pages/Activity";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/activities" element={<Activity></Activity>}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
