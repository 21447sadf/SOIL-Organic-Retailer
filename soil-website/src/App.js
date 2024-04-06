import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn"; // Updated import
import SignUp from "./components/SignUp";
import Sales from "./pages/Sales";
import ShoppingCart from "./pages/ShoppingCart";
import DIYToolkit from "./pages/DIYToolkit";
import MealPlanning from "./pages/MealPlanning";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Checkout from "./pages/Checkout";
import Profile from './components/Profile';
import PaymentConfirm from './pages/PaymentConfirm';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      {/* Set up router paths */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Sales" element={<Sales />} />
          <Route path="/MealPlanning" element={<MealPlanning />} />
          <Route path="/DIYToolkit" element={<DIYToolkit />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Checkout/PaymentConfirm" element={<PaymentConfirm />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
