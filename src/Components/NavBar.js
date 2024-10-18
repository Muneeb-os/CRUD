import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <>
      <nav className="navcontainer">
        <h1>{props.title}</h1>
        <ul>
          <li>
          <Link to="all-student-data">{props.liitemHO}</Link>
          </li>
          <li>
            <Link to="get-by-id">{props.liitemE}</Link>
          </li>
          <li>
            <Link to="add-student">{props.liitemB}</Link>
          </li>
          <li>
            <Link to="delete-student">{props.liitemH}</Link>
          </li>
          <li>
            <Link to="update-student">{props.liitemS}</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
