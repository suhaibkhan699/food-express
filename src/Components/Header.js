import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


// Title component for display logo
const Title = () => (
  <Link to={'/'}>
    <h1>Food Express</h1>
  </Link>
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