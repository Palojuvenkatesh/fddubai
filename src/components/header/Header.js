import React from "react";

import "./Header.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { VscThreeBars } from "react-icons/vsc";

const Header = () => {
  return (
    <div className="header-main-container">
      <div className="header-top-container">
        <div className="d-flex align-items-center">
          <select className="header-language-select me-3">
            <option>Languages</option>
            <option value={"English"}>English</option>
            <option value={"Arabic"}>Arabic</option>
          </select>
        </div>
        <div className="d-flex lang ">
          <select className="header-language-select me-3">
            <option>Currency</option>
            <option value={"English"}>Dollars</option>
            <option value={"Arabic"}>ponds</option>
          </select>
        </div>

        <div className="d-none d-md-inline">
          <div className="d-flex align-items-center">
            <NavLink className="header-top-my-account-link">
              <span>My Account</span>
            </NavLink>
            <div>
              <a href="/login">
              <button className="header-top-login-button">Signin/Signup</button>
              </a>
             
            </div>
          </div>
        </div>
      </div>
      <div className="header-middle-container">
        <NavLink className={"header-logo-container"}>
          <img
            src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
            alt="logo"
            className="header-logo-image"
          />
          <span className="header-website-name">FindDubai</span>
        </NavLink>
        <div className="d-none d-md-block">
          <ul className="header-large-links-list-container">
            <li className="header-large-list-item">
              <NavLink className="header-large-link-item">Home</NavLink>
            </li>
            <li className="header-large-list-item">
              <NavLink className="header-large-link-item">Categories</NavLink>
            </li>
            <li className="header-large-list-item">
              <NavLink className="header-large-link-item">
                Service Listing
              </NavLink>
            </li>
            <li className="header-large-list-item">
              <NavLink className="header-large-link-item">Wishlist</NavLink>
            </li>
          </ul>
        </div>
        <div className="d-md-none">
          <button
            className="header-toggler-button-sm"
            data-bs-toggle="collapse"
            data-bs-target="#headerCollapse"
            aria-expanded="false"
            aria-controls="headerCollapse"
          >
            <VscThreeBars className="header-toggle-bars-sm" />
          </button>
        </div>
      </div>
      <div className="header-search-container">
        <div className="header-search-location-container">
          <input
            type="text"
            className="header-location-search-input"
            placeholder="Enter location"
          />
        </div>
        <div className="header-search-location-container">
          <div className="header-search-service-container">
            <input
              type="text"
              className="header-search-input-service"
              placeholder="Search by name, category"
            />

            <button type="button" className="header-search-button">
              <BsSearch />
            </button>
          </div>
        </div>
      </div>
      <div className="collapse d-md-none" id="headerCollapse">
        <div className="header-sm-list-container">
          <ul className="header-links-list-container-sm">
            <li className="header-list-item-sm">
              <NavLink className="header-link-item-sm">Home</NavLink>
            </li>
            <li className="header-list-item-sm">
              <NavLink className="header-link-item-sm">Categories</NavLink>
            </li>
            <li className="header-list-item-sm">
              <NavLink className="header-link-item-sm">Service Listing</NavLink>
            </li>
            <li className="header-list-item-sm">
              <NavLink className="header-link-item-sm">Wishlist</NavLink>
            </li>
            <li className="header-list-item-sm">
              <NavLink className="header-link-item-sm">My Account</NavLink>
            </li>
            <li className="header-list-item-sm">
              <button className="header-login-button-sm" type="button">
                Signin/Signup
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
