import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

import "./App.css";

function Home() {
  return (
    <main className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <div className="landing-logo">🌿</div>

          <p className="landing-small-text">
            WELCOME TO YOUR INDOOR PARADISE
          </p>

          <h1>Paradise Nursery</h1>

          <div className="landing-line"></div>

          <p className="landing-description">
            Discover beautiful houseplants carefully selected to bring
            freshness, natural beauty, and a peaceful atmosphere into your
            home. From easy-care indoor plants to vibrant tropical varieties,
            Paradise Nursery helps you create your perfect green space.
          </p>

          <Link to="/plants" className="get-started-button">
            Get Started
            <span>→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/plants"
          element={
            <>
              <Header />
              <ProductList />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              <Header />
              <CartItem />
            </>
          }
        />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
