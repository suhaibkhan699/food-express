import { useSelector } from "react-redux";


// Title component for display logo
const Title = () => (
  <a href="/">
    <h1>Food Express</h1>
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const cartItems = useSelector((store) => store.cart.items)
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          {/* <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li> */}
          <li>Cart({cartItems.length})</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;