import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css"

function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!user) {
    navigate("/login");
    return null;
  }

  const firstLetter = (user.FirstName || user.email)
    .charAt(0)
    .toUpperCase();

  function handleLogout() {
    localStorage.removeItem("currentUser");
    navigate("/login");
    window.location.reload(); // عشان الهيدر يحدث فورًا
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="avatar big">{firstLetter}</div>

        <h2>{user.FirstName} {user.ListName}</h2>
        <p>{user.email}</p>

        <button onClick={handleLogout} className="logout-btn">
          تسجيل خروج
        </button>
      </div>
    </div>
  );
}

export default Profile;
