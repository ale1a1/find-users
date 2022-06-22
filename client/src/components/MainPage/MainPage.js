import { Fragment } from "react";

export function MainPage(props) {
  return (
    <Fragment>
      <div className="container pt-5">
        <h3 className="text-light mt-5 mb-5">FIND USERS WEB APPLICATION</h3>
        <ul>
          <h5 className="text-light mt-3">
            Check the
            <button className="btn btn-sm">
              <a
                className="nav-link link-warning text-uppercase h5"
                href="users"
              >
                Users List
              </a>
            </button>
          </h5>
          <h5 className="text-light mt-3">
            Retrieve
            <button className="btn  btn-sm">
              <a
                className="nav-link link-warning text-uppercase h5"
                href="users"
              >
                Users
              </a>
            </button>
            informations
          </h5>
          <h5 className="text-light mt-3">
            Save your
            <button className="btn  btn-sm">
              <a
                className="nav-link link-warning text-uppercase h5"
                href="favourites"
              >
                favourite Users
              </a>
            </button>
            and access to their contact details at any time
          </h5>
          <h5 className="text-light mt-3">
            Update
            <button className="btn  btn-sm">
              <a
                className="nav-link link-warning text-uppercase h5"
                href="profile"
              >
                your profile details
              </a>
            </button>
            at any time
          </h5>
        </ul>
      </div>
    </Fragment>
  );
}
