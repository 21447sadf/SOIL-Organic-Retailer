import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Sales from "./components/Sales";
import Slideshow from "./components/Slideshow";
import DIYVeggies from "./components/DIYVeggies";
import PlanYourDiet from "./components/PlanYourDiet";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      {/* /* Set up router paths */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Sales" element={<Slideshow />} />
          <Route path="/PlanYourDiet" element={<PlanYourDiet/>} />
          <Route path="/DIYVeggies" element={<DIYVeggies />} />
        </Routes>
      </Router>

      <SignIn />
      <SignUp />
      <Footer /> 
    </div>
  );
}

export default App;
