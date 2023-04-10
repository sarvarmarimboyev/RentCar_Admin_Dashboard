import React from "react";
import profileImg from "../../assets/images/profile-02.png";
import { Link } from "react-router-dom";
import "./top-nav.css";
const Topnav = () => {
  return (
    <div className="top__nav">
      <div className="top__nav-wrapper">
        <div className="serach__box">
          <input type="text" placeholder="search or type" />
          <span>
            <i class="ri-search-line"></i>
          </span>
        </div>
        <div className="top__nav-right">
          <span className="notification">
            <i class="ri-notification-3-line"></i>
            <span className="badge"></span>
          </span>
          <div className="profile">
            <Link to="/settings">
              <img src={profileImg} alt="proile" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
