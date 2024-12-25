import React from "react";
import "../../style.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
      w-100
      bg-dark-transparent
      text-light
      text-lg-start 
      fixed-bottom
    "
    >
      <div className="row align-items-center px-3 mainFooter">
        <h2 className="col smallFontSize mt-2 mb-0 footerH2 font-monospace text-white-50">
          &copy; Copyright {currentYear}
          <a
            className="text-decoration-none text-light ms-3 text-white-50"
            href="https://alessandro-ladu-portfolio.netlify.app/"
          >
            A.L.W. Media
          </a>
        </h2>
        <div className="col ms-2 text-muted mt-4 smallFontSize footerIcons">
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
