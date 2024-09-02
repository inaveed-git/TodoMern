import React from "react";
import { Link } from "react-router-dom";
import { HashLink as LinkPage } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Logo and Links */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">My TodoApp</div>
          {/* Links */}
          <LinkPage
            smooth
            to="#add-todo"
            className="text-gray-300 hover:text-white"
          >
            Add Todo
          </LinkPage>
          <LinkPage
            smooth
            to="#all-todos"
            className="text-gray-300 hover:text-white"
          >
            All Todos
          </LinkPage>
        </div>
        {/* Right Side: Sign In and Sign Up Buttons */}
        <div className="flex space-x-4">
          <Link to="/sign-in" className="text-gray-300 hover:text-white">
            Sign In
          </Link>
          <Link
            to="/sign-up"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
