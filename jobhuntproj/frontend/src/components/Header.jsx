import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header id="topHeader">
      <h1 id="headerTitle">Job Tracker</h1>
      <nav id="headerNav" aria-label="Main navigation">
        <NavLink to="/">Applications</NavLink>
        <span className="navSeparator">|</span>
        <NavLink to="/interviews">Interviews</NavLink>
        <span className="navSeparator">|</span>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}
