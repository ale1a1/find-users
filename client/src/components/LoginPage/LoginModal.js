import { Fragment, useState } from "react";
import { UsersService } from "../../libs/UsersService";
import { LoginRepository } from "../../libs/repository/LoginRepository";

const usersService = new UsersService();
const logingRepository = new LoginRepository();

export function LoginModal(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = async (email, password) => {
    await usersService.loginUser(email, password).then((user) => {
      if (user) props.loginHandler();
      logingRepository.save({ email: user.email, id: user.id });
    });
  };

  const closeHandler = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content loginModal fw-bold">
            <div className="modal-header loginModalHeader">
              <h4 className="modal-title" id="getOfferLabel">
                LOGIN
              </h4>
              <button
                className="btn-close btn-danger bg-danger"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                onSubmit={function (e) {
                  login(email, password);
                  closeHandler();
                  e.preventDefault();
                }}
              >
                <div className="mb-3">
                  <label className="col-form-label">email address</label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white"
                    name="email address"
                    placeholder="Insert your email address"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="col-form-label cssBold">password</label>
                  <input
                    type="password"
                    className="form-control bg-dark text-white"
                    name="Password"
                    placeholder="Insert your password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </div>

                <div className="modal-footer loginModalFooter">
                  <button
                    className="btn btn-danger mt-2"
                    type="button"
                    data-bs-dismiss="modal"
                    onClick={closeHandler}
                  >
                    Close
                  </button>
                  <button
                    className="btn btn-primary mt-2"
                    type="submit"
                    // data-bs-dismiss="modal"
                  >
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
