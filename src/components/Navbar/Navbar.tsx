import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="section">
      <div className="navbar">
        <Link style={{ textDecoration: "none" }} to="/dashboard">
          <div className="dashboard">
            <div className="logo">
              <FontAwesomeIcon
                icon={faChartLine}
                style={{ color: "#ffffff" }}
              />
            </div>
            <p>DASHBOARD</p>
          </div>
        </Link>
        <Link to="/users" style={{ textDecoration: "none" }}>
          <div className="users">
            <div className="logo">
              <FontAwesomeIcon icon={faUsers} style={{ color: "#ffffff" }} />
            </div>
            <p>USERS</p>
          </div>
        </Link>
        <Link to="/addUser" style={{ textDecoration: "none" }}>
          <div className="users">
            <div className="logo">
              <FontAwesomeIcon style={{ color: "#ffffff" }} icon={faUserPlus} />
            </div>
            <p>ADD USER</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
