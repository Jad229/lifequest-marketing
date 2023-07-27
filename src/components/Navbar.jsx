import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav--brand">
        <Link to="/">
          Life<span className="nav--brand-quest">Quest</span>
        </Link>
      </div>
      <div className="nav--items">
        <Link to="/features">Learn more</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About Us</Link>
      </div>
      <div className="nav--items">
        <Link to="/waitlist">
          <button className="nav--cta">Join Waitlist</button>
        </Link>
      </div>
    </nav>
  );
}
