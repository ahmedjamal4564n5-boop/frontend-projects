import React, { useState } from "react";
import img from "../../../img/logo.png";
import "./logein.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

function SingeUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const fixedEmail = email.trim().toLowerCase();

    const user = users.find((u) => u.email === fixedEmail);

    if (!user) {
      setError("الإيميل غير مسجل");
      return;
    }

    if (user.password !== password) {
      setError("الباسورد غير صحيح");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    navigate("/");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <div className="contaner">
        <div className="header">
          <Link to="/">
            <img src={img} alt="" />
          </Link>
        </div>

        <div className="form">
          <form onSubmit={handleLogin} autocomplete="off">
            <div className="text-tep">
              <p>Please enter your details</p>
              <h1>Welcome back</h1>
            </div>

            <input
              type="email"
              autocomplete="off"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <div className="forge">
              <a href="#">Forgot password</a>
            </div>

            <button type="submit">Login</button>

            <button type="button" className="btn-googl">
              <FcGoogle /> Sign in with Google
            </button>

            <p className="prg">
              Don`t have an account? <Link to="/register">register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SingeUp;
