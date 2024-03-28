import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Sales from "./pages/Sales";
import DIYToolkit from "./pages/DIYToolkit";
import PlanYourDiet from "./components/PlanYourDiet";
import Footer from "./components/Footer";
import Home from "./pages/home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />  
      <SignIn />
      <SignUp />

      {/* /* Set up router paths */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Sales" element={<Sales />} />
          <Route path="/PlanYourDiet" element={<PlanYourDiet/>} />
          <Route path="/DIYToolkit" element={<DIYToolkit />} />
        </Routes>
      </Router>

    
      <Footer /> 
    </div>
  );
}

export default App;
