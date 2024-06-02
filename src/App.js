import React from "react";
import profilePic from "./2024-06-01 17.32.30.jpg";

export default function App() {
  return (
    <>
      <Nav />
      <div className="main-container">
        <Profile />
      </div>
    </>
  );
}

function Nav() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-item">
        Skills
      </a>
      <a href="#" className="navbar-item">
        Experience
      </a>
      <a href="#" className="navbar-item">
        About
      </a>
      <a href="#" className="navbar-item">
        Contact
      </a>
    </nav>
  );
}

function Profile() {
  return (
    <div className="profile-container">
      <ProfilePicture />
    </div>
  );
}

function ProfilePicture() {
  return (
    <div className="profile-picture-container">
      <img src={profilePic} className="profile-picture" alt="Profile pic" />
    </div>
  );
}
