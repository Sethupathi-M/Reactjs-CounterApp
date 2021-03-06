// Stateless Functional Component
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters.length}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
