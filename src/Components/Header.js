import { useEffect, useState } from "react";
import { logo_url } from "../Utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [logintext, setlogintext] = useState("Login");

  return (
    <div className="Header">
      <div className="logocontainer">
        <img className="logo" src={logo_url} />
      </div>
      <div className="navitems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>

          <button
            onClick={() => {
              logintext === "Login"
                ? setlogintext("Logout")
                : setlogintext("Login");
            }}
          >
            {logintext}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
