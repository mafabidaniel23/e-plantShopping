import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="brand">
          <span className="brand-icon">🌿</span>
          Paradise Nursery
        </Link>

        <nav className="nav-links">
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Link>

          <Link
            to="/plants"
            className={location.pathname === "/plants" ? "active" : ""}
          >
            Plants
          </Link>

          <Link
            to="/cart"
            className={`cart-link ${
              location.pathname === "/cart" ? "active" : ""
            }`}
          >
            <span className="cart-icon">🛒</span>
            Cart
            <span className="cart-badge">{totalItems}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
