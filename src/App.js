import './App.css';
import Home from './Components/pages/FrontPage/Home';
import OverView from './Components/pages/OverView/OverView';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout/:id" element={<OverView />} />
      </Routes>
    </>
  );
}

export default App;
