import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">
          Home
        </Link>
        <div className="flex space-x-4">
          <Link to="/all-posts" className="hover:underline">
            All Posts
          </Link>
          <Link to="/add-post" className="hover:underline">
            Add Post
          </Link>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
