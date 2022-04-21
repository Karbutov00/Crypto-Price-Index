import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return (
        <Link to="/" style={{ textDecoration: "none" }}>
            <div className="navbar">
                <FaCoins className="icon" />
                <h1>
                    Crypto <span className="purple">Price</span> Index
                </h1>
            </div>
        </Link>
    );
}
