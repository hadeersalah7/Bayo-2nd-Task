import "./SASS/nav.scss";
import { Row, Col } from "react-bootstrap";
// import arrow from "./Images/arrow.svg";
import imaginaryBrand from "./Images/imaginary_brand.svg";
import settinIcon from "./Images/settings.svg";
import logout from "./Images/logout.svg";

import { useState } from "react";

// function to render the acme contents multiple times when i click on them from the dropdown arrow:
function Acme() {
  return (
    // <div className='nav-container'>
    <div className="acme">
      <img src={imaginaryBrand} id="brand" alt="brand-image" />
      <h5 className="nav-head">ACME GmbH</h5>
    </div>
    //   </div>
  );
}

function Nav() {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="container">
        <nav>
          <div className="nav">
            {/* <Col xs={6}> */}
            <div className="nav-container">
              <div className="acme">
                <span onClick={toggleDropdown}>
                  <i
                    className={`ri-arrow-${
                      showDropdown ? "up" : "down"
                    }-s-line`}
                    id="arrow"
                  ></i>
                </span>
                {/* <img src={arrow} id="arrow"/> */}
                {/* <img src={imaginaryBrand} id="brand"/>
        <h5 className="nav-head">ACME GmbH</h5> */}
                <Acme />
              </div>
              {showDropdown && (
                <div className="dropdown-container">
                  {[...Array(12)].map((_, index) => (
                    <div className="dropdown-item" key={index}>
                      <Acme />
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* </Col> */}

            <div className="logos">
              <div className="setting">
                <button className="btn1">
                  <img src={settinIcon} className="logo1" alt="setting" />
                  <span>Settings</span>
                </button>
              </div>

              <div className="logout">
                <button className="btn2">
                  <img src={logout} className="logout-logo" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
