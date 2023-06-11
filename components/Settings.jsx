import "./SASS/settings.scss";
import Logout from "./Images/logout.svg";
import { Row, Col } from "react-bootstrap";
import Profile from "./Profile";
import Security from "./Security";
import CustomSelect from "./CustomSelect";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          {/* navbar */}
          <nav>
            <Row className="buttons-wrapper">
              <Col xs={4} md={4} className="files">
                <Link to={"/"}>
                  <button id="files">
                    <span>
                      <i class="ri-arrow-left-line"></i>
                    </span>
                    Files
                  </button>
                </Link>
              </Col>

              <Col xs={8} md={8} id="logout">
                <button>
                  <img src={Logout} alt="" /> Logout
                </button>
              </Col>
            </Row>
          </nav>

          {/* header */}
          <header id="header">
            <h2>Settings</h2>
          </header>

          {/* the 2 cards */}
          <div className="cards-wrapper">
            <Row>
              <Col xs={0} md={7}>
                <Profile />
              </Col>

              <Col xs={12} md={5}>
                <Security />
              </Col>
            </Row>
          </div>

          
          <CustomSelect />
        </div>
      </div>
    </>
  );
};

export default Settings;
