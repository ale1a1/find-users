import React from "react";
import "../../style.css";

export function Footer() 

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

{
  return (
    <footer
      className="
      w-100
      bg-dark-transparent
      text-light
      text-lg-start text-md-center
      fixed-bottom
    "
    >
      <div className="row align-items-center px-3">
        <h2 className="col smallFontSize mt-2 mb-0 ms-xs-auto ms-sm-auto ms-lg-2 footerH2 font-monospace">
          &copy; Copyright <span className="year">20??</span>
          <a
            className="text-decoration-none text-light ms-3"
            href="https://portfolio-ale1a184.herokuapp.com/#home"
          >
            A.L.W. Media
          </a>
        </h2>
        <div className="col ms-2 text-muted mt-sm-4 smallFontSize footerIcons">
          <ul className="list-unstyled d-flex flex-row justify-content-around px-5 me-1">
            <li>
              <a href="https://www.instagram.com/ale1a184/">
                <i className="bi bi-instagram text-white-50 footerIcon"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/feed/?trk=onboarding-landing">
                <i className="bi bi-linkedin text-white-50 footerIcon"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/ale1a1">
                <i className="bi bi-github text-white-50 footerIcon"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/">
                <i className="bi bi-youtube text-white-50 footerIcon"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/AleLadu84">
                <i className="bi bi-twitter text-white-50 footerIcon"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitch.tv/">
                <i className="bi bi-twitch text-white-50 footerIcon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
