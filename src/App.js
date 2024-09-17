import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Import the CSS file
import BookingMenu from './components/BookingMenu';
import BlogMenu from './components/BlogMenu';
import ReviewsMenu from './components/ReviewsMenu';
import ProfileMenu from './components/ProfileMenu';
import HomeScreen from './pages/Home';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-100">
        <header className="navbar">
          <div className="nav-links">
            <Link to="/" className="nav-link">Главная</Link>
            <Link to="/booking" className="nav-link">Забронировать</Link>
            <Link to="/blog" className="nav-link">Блог</Link>
            <Link to="/reviews" className="nav-link">отзывы</Link>
          </div>
          <Link to="/profile">
            <button className="profile-button">👤</button>
          </Link>
        </header>

        <main className="pt-16 flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/booking" element={<BookingMenu />} />
            <Route path="/blog" element={<BlogMenu />} />
            <Route path="/reviews" element={<ReviewsMenu />} />
            <Route path="/profile" element={<ProfileMenu />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
