import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import Sales from "./pages/Sales";
import ShoppingCart from './pages/ShoppingCart';
import SignInPage from "./pages/SignInPage";
import DIYToolkit from "./pages/DIYToolkit";
import PlanYourDiet from "./components/PlanYourDiet";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Checkout from "./pages/Checkout";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* /* Set up router paths */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route exact path="/" element={<Home />} />
          <Route path="/Sales" element={<Sales />} />
          <Route path="/PlanYourDiet" element={<PlanYourDiet/>} />
          <Route path="/DIYToolkit" element={<DIYToolkit />} />
          <Route path="/SignInPage" element={<SignInPage />} />
          <Route path ="/SignIn" element={<SignIn />} />
          <Route path ="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>

      <Footer /> 
    </div>
  );
}

export default App;
