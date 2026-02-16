import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const pageLabel = (() => {
    if (location.pathname === "/interviews") return "Interviews";
    if (location.pathname === "/about") return "About";
    return "Applications";
  })();

  return (
    <header id="siteHeader">
      <div id="topHeader">
        <h1 id="headerTitle">JobTrack</h1>

        <nav id="headerNav" aria-label="Main navigation">
          <NavLink to="/">
            Applications <span className="navChevron">v</span>
          </NavLink>
          <NavLink to="/interviews">
            Interviews <span className="navChevron">v</span>
          </NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <div id="headerActions">
          <button type="button" className="headerActionText">
            Sign Up or Log In
          </button>
          <button
            type="button"
            className="headerIconButton headerUserIcon"
            aria-label="Account"
          />
          <button
            type="button"
            className="headerIconButton headerSearchIcon"
            aria-label="Search"
          />
        </div>
      </div>

      <div id="headerSubnav">
        <span className="subnavCurrent">Home</span>
        <span className="subnavDivider">›</span>
        <span>{pageLabel}</span>
      </div>
    </header>
  );
}
