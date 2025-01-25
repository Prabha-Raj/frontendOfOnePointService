import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Navbar.css";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg px-3" id="Navbar">
                <div className="container-fluid navbar-container">
                    <Link className="navbar-brand" to="/">
                        <img src="/images/logo-one-point.svg" alt="Logo" />
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarMenu"
                        aria-controls="navbarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="">
                            <img src="/images/menu.png" alt="Menu" />
                        </span>
                    </button>

                    <div className="collapse navbar-collapse ms-5" id="navbarMenu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutus.html">About Us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="servicesDropdown"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    Services
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                                    <li><Link className="dropdown-item" to="/ac-repair-services.html">AC Repair &amp; Services</Link></li>
                                    <li><Link className="dropdown-item" to="#">RO Repair &amp; Services</Link></li>
                                    <li><Link className="dropdown-item" to="#">Washing Machine Repair</Link></li>
                                    <li><Link className="dropdown-item" to="#">Refrigerator Repair</Link></li>
                                    <li><Link className="dropdown-item" to="#">Geyser Repair &amp; Services</Link></li>
                                    <li><Link className="dropdown-item" to="#">Microwave Repair Service</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="#">Quick Help</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact_us.html">Contact Us</Link>
                            </li>
                        </ul>

                        <div className="tracking-box" >
                            <a className="form-control " href="tel:+918400900581" style={{ textDecoration: "none" }}>
                                <span className="text-secondary phone-link">+91-8400900581</span>
                                &nbsp;&nbsp;<i className="fa-solid fa-phone" style={{ color: "red" }}></i>
                            </a>
                        </div>
                        <div className="search-container ms-2 px-2">
                            <i className="fa fa-search search-icon"></i>
                            <div className="search-box form-inline my-2 my-lg-0">
                                <input
                                    className="form-control search-input ps-5"
                                    type="search"
                                    placeholder="Search in AC Service and Repair"
                                    aria-label="Search"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
