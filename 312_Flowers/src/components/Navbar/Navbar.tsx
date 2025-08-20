import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>
      </div>

      <div className="nav-logo">
        <h1>312 Flowers</h1>
      </div>

      <div className="nav-right">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
