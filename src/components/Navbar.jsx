import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav--brand">
        <Link to="/">LifeQuest</Link>
      </div>
      <div className="nav--items">
        <Link to="/features">Features</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
