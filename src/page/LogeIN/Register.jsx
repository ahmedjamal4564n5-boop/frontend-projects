import React, { useState } from "react";
import img from "../../../img/logo.png";
import "./logein.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
function Register() {
  const [errorMessage, setErrorMessage] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [logenin, setLogenin] = useState({
    FirstName: "",
    ListName: "",
    email: "",
    password: "",
    checkbox: false,
  });
  const Navigat = useNavigate();
  function handlButtenSubmit(event) {
    event.preventDefault();
    const email = logenin.email.trim().toLowerCase();
    if (!logenin.email.endsWith("@gmail.com")) {
      setErrorMessage("الإيميل لازم يكون @gmail.com");
      return;
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(logenin.password)) {
      setErrorPassword(
        "الباسورد لازم يحتوي على حرف كابيتال + حرف سمول + رقم + علامة، ولا يقل عن 6 حروف.",
      );
      return;
    } else {
      setErrorPassword("");
    }
    let users = [];

    try {
      const storedUsers = JSON.parse(localStorage.getItem("users"));
      users = Array.isArray(storedUsers) ? storedUsers : [];
    } catch {
      users = [];
    }
    const revrechemail = users.some((user) => user.email === email);
    if (revrechemail) {
      setErrorMessage("الإيميل ده متسجل قبل كده");
      return;
    } else {
      setErrorMessage(" ");
    }
    const newuser = {
      FirstName: logenin.FirstName,
      ListName: logenin.ListName,
      email: logenin.email,
      password: logenin.password,
    };
    users.push(newuser);
    localStorage.setItem("users", JSON.stringify(users));
    setLogenin({
      FirstName: "",
      ListName: "",
      email: "",
      password: "",
      checkbox: false,
    });
    Navigat("/login");
  }

  return (
    <div className="login">
      <div className="contaner">
        <div className="header">
          <Link to="/">
            <img src={img} alt="" />
          </Link>
        </div>
        <div className="form">
          <form autocomplete="off">
            <div className="text-tep">
              <p>Please enter your datalis</p>
              <h1>Welcome back</h1>
            </div>
            <div className="user">
              <input
                value={logenin.FirstName}
                onChange={(event) =>
                  setLogenin({ ...logenin, FirstName: event.target.value })
                }
                type="text"
                placeholder="First Name"
              />
              <input
                value={logenin.ListName}
                onChange={(event) =>
                  setLogenin({ ...logenin, ListName: event.target.value })
                }
                type="text"
                placeholder="List Name"
              />
            </div>
            <input
              value={logenin.email}
              onChange={(event) =>
                setLogenin({ ...logenin, email: event.target.value })
              }
              type="email"
              placeholder="Email adress"
              autoComplete="off"
            />
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <input
              value={logenin.password}
              onChange={(event) =>
                setLogenin({ ...logenin, password: event.target.value })
              }
              type="password"
              placeholder="password"
              autoComplete="off"
            />
            {errorPassword && <p style={{ color: "red" }}>{errorPassword}</p>}
            <div className="forge">
              <div>
                <input
                  value={logenin.checkbox}
                  onChange={(event) =>
                    setLogenin({ ...logenin, checkbox: event.target.checked })
                  }
                  type="checkbox"
                  id="ch"
                />
                <label htmlFor="ch">Remember For 30 days</label>
              </div>
            </div>
            <button type="submit" onClick={handlButtenSubmit}>
              Sign up
            </button>

            <p className="prg">
              Don`t have an account? <Link to="/login">login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
