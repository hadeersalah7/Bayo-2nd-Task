import "./SASS/nav.scss";
// import arrow from "./Images/arrow.svg";
// import imaginaryBrand from "./Images/imaginary_brand.svg";
// import Settings from './Settings'
import settinIcon from "./Images/settings.svg";
import logout from "./Images/logout.svg";
import bayoLogo from "./Images/logo_black_font_without_border(o).png"
import { Link } from "react-router-dom";
// import { useState } from "react";

// function to render the acme contents multiple times when i click on them from the dropdown arrow:
// function Acme() {
//   return (
//     // <div className='nav-container'>
//     <div className="acme ">
//       <img src={imaginaryBrand} className="brand" alt="brand-image" />
//       <h5 className="nav-head">ACME GmbH</h5>
//     </div>
//     //   </div>
//   );
// }

function Nav() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [colorScheme, setColorScheme] = useState("default")
//   const [dropdownActive, setDropdownActive] = useState(false);
  

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//     setColorScheme(showDropdown ? "default" : "dropdown")
//     setDropdownActive(!dropdownActive)
    
//   };

  return (
    <>
      <div className="container">
        <nav>
          <div className="nav">
            {/* <Col xs={6}> */}
            <div className="nav-container">
              <div className="acme" >
                <img src={bayoLogo} alt="" />
                {/* <span>Hadeer Salah</span> */}
              {/* <Acme className={colorScheme === "dropdown" ? "wheat-white" : ""} /> */}
                {/* <span onClick={toggleDropdown} className="dropdown-span"> */}
                  {/* <i */}
                    {/* className={`ri-arrow-${ */}
                      {/* showDropdown ? "up" : "down" */}
                    {/* }-s-line`} */}
                    {/* id="arrow" */}
                  {/* ></i> */}
                {/* </span> */}
                
                {/* <Acme /> */}
              {/* </div> */}
              {/* {showDropdown && ( */}
                {/* <div className={`dropdown-container ${colorScheme === "dropdown" ? "white-background" : ""}`}> */}
                  {/* {[...Array(20)].map((_, index) => ( */}
                    {/* <div className="dropdown-item" key={index}> */}
                      {/* <Acme className={`acme ${dropdownActive ? "blue-acme" : ""}`}  /> */}
                        {/* <div className="acme-contents"> */}
                        {/* <img src={imaginaryBrand} className="brand" alt="brand-image" /> */}
                         {/* <p className="acme-head">ACME GmbH</p> */}
                        {/* </div> */}
                    {/* </div> */}
                  {/* ))} */}
                </div>
              {/* )} */}
            </div>

            <div className="logos">
              <div className="setting">
                <button className="btn1">
                  <Link to='/settings'>
                  <img src={settinIcon} className="logo1" alt="setting" />
                  <span>Settings</span>
                  </Link>
                </button>
              </div>

              <div className="logout">
                <button className="btn2">
                  <img src={logout} className="logout-logo" alt=""/>
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
