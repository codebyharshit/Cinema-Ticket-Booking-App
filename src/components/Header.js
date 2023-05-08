import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const loginOnClick = () => {
    navigate("/Login");
  };

  const registerOnClick = () => {
    navigate("/Register");
  };

  const onLogout = (e) => {
    e.preventDefault();
    // dispatch(logoutAction());
  };

  const user = 1;

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-4 link-dark fw-bold menu-link">
              Home Page
            </Link>
          </li>
          <li>
            <Link
              to="/cineplexs"
              className="nav-link px-4 link-dark fw-bold menu-link"
            >
              Theater
            </Link>
          </li>
          <li>
            <Link
              to="/addMovie"
              className="nav-link px-4 link-dark fw-bold menu-link"
            >
              Add Movie
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              className="nav-link px-4 link-dark fw-bold menu-link"
            >
              Movies
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/movies/now-showing">
                  Movies in Mumbai
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/movies/coming-soon">
                  Upcoming Release
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/showtimes"
              className="nav-link px-4 link-dark fw-bold menu-link"
            >
              Show Times
            </Link>
          </li>
        </ul>
        <div className="col-md-3 text-end">
          {!user ? (
            <>
              <button
                type="button"
                onClick={loginOnClick}
                className="btn btn-outline-primary me-2 color-outline-primary"
              >
                Log in
              </button>
              <button
                type="button"
                onClick={registerOnClick}
                className="btn btn-primary color-primary"
              >
                Register
              </button>
            </>
          ) : (
            <div className="dropdown">
              <button
                className="dropdown-toggle btn btn-color-profile"
                type="button"
                id="dropdownMenuProfile"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div>
                  {/* <img
                    src={user.avatar}
                    alt="avatar"
                    width={36}
                    height={36}
                    className="rounded-circle img-cover"
                  /> */}
                  <span className="text-center ms-1 mx-auto">ABHISHEK</span>
                </div>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuProfile"
              >
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Personal information
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/change-password">
                    Change Password
                  </Link>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={onLogout}
                    href="/logout"
                  >
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
