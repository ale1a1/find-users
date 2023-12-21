import { Fragment } from "react";
// import { LogoutRepository } from "../../libs/repository/LogoutRepository";

import "../../queries.css";

// const logoutRepository = new LogoutRepository();

export function Navbar(props) {
  // const logOut = () => {
  //   logoutRepository.remove();
  //   props.logoutHandler();
  // };

  const logoutModalSwitcher = () => {
    const logoutModal = document.querySelector(".logoutModal");
    logoutModal.classList.toggle("showModal");
  };

  return (
    <Fragment>
      <nav
        className={`${props.hidden} navbar navbar-expand-lg navbar-dark bg-danger fixed-top`}
      >
        <div className="container-fluid">
          <a className="navbar-brand font-monospace" href="/">
            Find Users Web Application
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Navbar"
            aria-controls="Navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="Navbar">
            <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  //   className={`nav-link ${props.homeClass} text-uppercase`}
                  className="nav-link  text-uppercase"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  //   className={`nav-link ${props.searchClass} text-uppercase`}
                  className="nav-link  text-uppercase"
                  href="/users"
                >
                  Users list
                </a>
              </li>
              <li className="nav-item">
                <a
                  //   className={`nav-link ${props.buddiesClass} text-uppercase`}
                  className="nav-link  text-uppercase"
                  href="/favourites"
                >
                  Favourites
                </a>
              </li>
              <li className="nav-item">
                <a
                  //   className={`nav-link ${props.profileClass} text-uppercase`}
                  className="nav-link  text-uppercase"
                  href="/profile"
                >
                  Profile
                  {/* My profile ({gamebuddyUsername}) */}
                </a>
              </li>
            </ul>
            <div
              // onClick={logOut}
              className="btn btn-outline-dark btn-sm"
              // href="/"
              role="button"
              onClick={logoutModalSwitcher}
            >
              logout
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
