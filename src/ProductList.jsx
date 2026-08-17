import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plantCategories = [
  {
    name: "Indoor Plants",
    description:
      "Beautiful, easy-to-care-for plants that bring freshness and natural beauty into homes and offices.",
    plants: [
      {
        id: 1,
        name: "Snake Plant",
        price: 18.99,
        image: "/images/snake-plant.jpg",
        description:
          "A hardy indoor plant that is easy to maintain and adds an elegant touch to any room.",
      },
      {
        id: 2,
        name: "Monstera Deliciosa",
        price: 29.99,
        image: "/images/monstera.jpg",
        description:
          "A tropical houseplant with large decorative leaves that creates a beautiful indoor atmosphere.",
      },
      {
        id: 3,
        name: "Peace Lily",
        price: 22.99,
        image: "/images/peace-lily.jpg",
        description:
          "A graceful flowering houseplant known for its attractive leaves and elegant white flowers.",
      },
      {
        id: 4,
        name: "ZZ Plant",
        price: 24.99,
        image: "/images/zz-plant.jpg",
        description:
          "A low-maintenance plant with glossy green leaves, perfect for busy plant lovers.",
      },
      {
        id: 5,
        name: "Rubber Plant",
        price: 27.99,
        image: "/images/rubber-plant.jpg",
        description:
          "A striking indoor plant with large glossy leaves that makes an excellent decorative plant.",
      },
      {
        id: 6,
        name: "Chinese Evergreen",
        price: 21.99,
        image: "/images/chinese-evergreen.jpg",
        description:
          "A versatile indoor plant with attractive foliage that grows well in many indoor environments.",
      },
    ],
  },

  {
    name: "Succulents & Cacti",
    description:
      "Water-efficient plants with unique shapes and textures that are perfect for bright indoor spaces.",
    plants: [
      {
        id: 7,
        name: "Aloe Vera",
        price: 15.99,
        image: "/images/aloe-vera.jpg",
        description:
          "A popular succulent with thick leaves that grows well with plenty of sunlight.",
      },
      {
        id: 8,
        name: "Jade Plant",
        price: 17.99,
        image: "/images/jade-plant.jpg",
        description:
          "A charming succulent with thick green leaves that makes a wonderful indoor plant.",
      },
      {
        id: 9,
        name: "Echeveria",
        price: 14.99,
        image: "/images/echeveria.jpg",
        description:
          "A compact rosette-shaped succulent with beautiful symmetrical leaves.",
      },
      {
        id: 10,
        name: "Haworthia",
        price: 13.99,
        image: "/images/haworthia.jpg",
        description:
          "A small decorative succulent with distinctive patterned leaves.",
      },
      {
        id: 11,
        name: "Zebra Plant",
        price: 16.99,
        image: "/images/zebra-plant.jpg",
        description:
          "A distinctive succulent recognized by its attractive striped foliage.",
      },
      {
        id: 12,
        name: "String of Pearls",
        price: 19.99,
        image: "/images/string-of-pearls.jpg",
        description:
          "A trailing succulent with bead-like leaves that looks beautiful in hanging containers.",
      },
    ],
  },

  {
    name: "Tropical Plants",
    description:
      "Lush tropical plants that add a vibrant, natural and exotic appearance to indoor spaces.",
    plants: [
      {
        id: 13,
        name: "Bird of Paradise",
        price: 39.99,
        image: "/images/bird-of-paradise.jpg",
        description:
          "A dramatic tropical plant with large leaves that creates a bold statement indoors.",
      },
      {
        id: 14,
        name: "Calathea",
        price: 26.99,
        image: "/images/calathea.jpg",
        description:
          "A beautiful tropical plant valued for its colorful and patterned foliage.",
      },
      {
        id: 15,
        name: "Areca Palm",
        price: 34.99,
        image: "/images/areca-palm.jpg",
        description:
          "A graceful palm with feathery leaves that brings a tropical feeling indoors.",
      },
      {
        id: 16,
        name: "Boston Fern",
        price: 23.99,
        image: "/images/boston-fern.jpg",
        description:
          "A lush fern with delicate fronds that adds softness and greenery to indoor spaces.",
      },
      {
        id: 17,
        name: "Croton",
        price: 28.99,
        image: "/images/croton.jpg",
        description:
          "A colorful tropical plant featuring vibrant foliage in shades of green, yellow and red.",
      },
      {
        id: 18,
        name: "Anthurium",
        price: 31.99,
        image: "/images/anthurium.jpg",
        description:
          "An attractive tropical flowering plant with glossy foliage and colorful flowers.",
      },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <main className="products-page">
      <section className="products-hero">
        <div>
          <p className="eyebrow">DISCOVER YOUR PERFECT PLANT</p>
          <h1>Bring Nature Home</h1>
          <p>
            Explore our collection of beautiful houseplants and create your
            own indoor paradise.
          </p>
        </div>

        <div className="hero-cart-summary">
          🛒 <strong>{totalItems}</strong> plants in cart
        </div>
      </section>

      <section className="categories-container">
        {plantCategories.map((category) => (
          <div className="category-section" key={category.name}>
            <div className="category-heading">
              <h2>{category.name}</h2>
              <p>{category.description}</p>
            </div>

            <div className="plant-grid">
              {category.plants.map((plant) => {
                const added = isInCart(plant.id);

                return (
                  <article className="plant-card" key={plant.id}>
                    <div className="plant-image-container">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        className="plant-image"
                      />

                      {added && (
                        <span className="added-label">Added to Cart</span>
                      )}
                    </div>

                    <div className="plant-card-content">
                      <span className="plant-category">
                        {category.name}
                      </span>

                      <h3>{plant.name}</h3>

                      <p className="plant-description">
                        {plant.description}
                      </p>

                      <div className="plant-card-footer">
                        <span className="plant-price">
                          ${plant.price.toFixed(2)}
                        </span>

                        <button
                          className="add-button"
                          onClick={() => handleAddToCart(plant)}
                          disabled={added}
                        >
                          {added ? "Added ✓" : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default ProductList;
