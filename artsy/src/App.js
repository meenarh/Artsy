import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Market from "./pages/Market";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
   
  );
}

export default App;
