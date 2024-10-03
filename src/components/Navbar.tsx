import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="firstDiv">
          <p className="navText">Navbar</p>
          <span className="hr">
            <hr />
          </span>
        </div>
        <ul className="links">
          <li className="a">
            <Link to="/" className="text">
              <small>00</small>Home
            </Link>
          </li>
          <li className="a">
            <Link to="/destination" className="text">
              <small>01</small>Destination
            </Link>
          </li>
          <li className="a">
            <Link to="/crew" className="text">
              <small>03</small>Crew
            </Link>
          </li>
          <li className="a">
            <Link to="/technnology" className="text">
              <small>04</small>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
