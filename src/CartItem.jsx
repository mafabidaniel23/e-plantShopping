import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <section className="empty-cart">
          <div className="empty-cart-icon">🛒</div>

          <h1>Your Cart is Empty</h1>

          <p>
            You haven't added any plants yet. Explore our collection and find
            something beautiful for your home.
          </p>

          <Link to="/plants" className="continue-button">
            Continue Shopping
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <section className="cart-header-section">
        <div>
          <p className="eyebrow">YOUR SELECTION</p>
          <h1>Shopping Cart</h1>
          <p>
            You have {totalItems}{" "}
            {totalItems === 1 ? "plant" : "plants"} in your cart.
          </p>
        </div>
      </section>

      <section className="cart-layout">
        <div className="cart-items-container">
          {cartItems.map((item) => {
            const itemTotal = item.price * item.quantity;

            return (
              <article className="cart-item-card" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-details">
                  <span className="plant-category">HOUSEPLANT</span>

                  <h2>{item.name}</h2>

                  <p className="cart-unit-price">
                    Unit Price: ${item.price.toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button
                      className="quantity-button"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>

                    <span className="quantity">
                      {item.quantity}
                    </span>

                    <button
                      className="quantity-button"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-item-total">
                  <span>Total</span>

                  <strong>${itemTotal.toFixed(2)}</strong>

                  <button
                    className="delete-button"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Total Plants</span>
            <strong>{totalItems}</strong>
          </div>

          <div className="summary-row">
            <span>Number of Plant Types</span>
            <strong>{cartItems.length}</strong>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">
            <span>Total Cost</span>
            <strong>${totalCost.toFixed(2)}</strong>
          </div>

          <button
            className="checkout-button"
            onClick={() => alert("Checkout is Coming Soon!")}
          >
            Checkout
          </button>

          <Link to="/plants" className="continue-button">
            Continue Shopping
          </Link>
        </aside>
      </section>
    </main>
  );
}

export default CartItem;
