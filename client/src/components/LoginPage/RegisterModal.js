import { useState, Fragment } from "react";
import { UsersService } from "../../libs/UsersService";
import { LoginRepository } from "../../libs/repository/LoginRepository";

const usersService = new UsersService();
const loginRepository = new LoginRepository();

const addUser = usersService.addUser;

export function RegisterModal(props) {
  const [form, setForm] = useState({});
  const [labelErrorMessage, setLabelErrorMessage] = useState({});

  const IsLoggedIn = () => {
    props.loginHandler();
  };

  const handler = async (e) => {
    e.preventDefault();
    await addUser(form).then((response) => {
      const errors = {};
      if (response.status === 409) {
        response.data.errors.forEach((element) => {
          errors[element.field] = element.message;
        });
        setLabelErrorMessage(errors);
        console.log(labelErrorMessage);
      } else {
        loginRepository.save({
          email: response.data.user.email,
          id: response.data.user.id,
        });
        IsLoggedIn();
        alert("User successfully created. Click ok to login");
      }
    });
  };

  const closeHandler = () => {
    setForm({ name: "", email: "", password: "", phoneNumber: "" });
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id="registerModal"
        tabIndex="-1"
        aria-labelledby="registerLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content registerFormModal fw-bold">
            <div className="modal-header registerFormModalHeader">
              <h4 className="modal-title">REGISTER</h4>
              <button
                className="btn-close bg-danger bg-danger"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                onSubmit={function (e) {
                  handler(e);
                }}
              >
                <div className="mb-3">
                  {labelErrorMessage.username && (
                    <label className="col-form-label text-warning display-6">
                      {labelErrorMessage.username}
                    </label>
                  )}
                  {!labelErrorMessage.username && (
                    <label className="col-form-label">username</label>
                  )}
                  <input
                    type="text"
                    className="form-control bg-dark text-white"
                    name="username"
                    placeholder="Create your username"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    value={form.name}
                    required
                  />
                </div>
                <div className="mb-3">
                  {labelErrorMessage.email && (
                    <label className="col-form-label text-warning display-6">
                      {labelErrorMessage.email}
                    </label>
                  )}
                  {!labelErrorMessage.email && (
                    <label className="col-form-label">email address</label>
                  )}

                  <input
                    type="email"
                    className="form-control bg-dark text-white"
                    name="email address"
                    placeholder="Enter your email address"
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    value={form.email}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="col-form-label">password</label>
                  <input
                    type="password"
                    className="form-control bg-dark text-white"
                    name="password"
                    placeholder="Create your password"
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    value={form.password}
                    required
                  ></input>
                </div>
                <div className="mb-3">
                  {labelErrorMessage.phoneNumber && (
                    <label className="col-form-label text-warning display-6">
                      {labelErrorMessage.phoneNumber}
                    </label>
                  )}
                  {!labelErrorMessage.phoneNumber && (
                    <label className="col-form-label">phone number</label>
                  )}
                  <input
                    type="number"
                    className="form-control bg-dark text-white"
                    name="phone number"
                    placeholder="Enter your phone number"
                    onChange={(e) =>
                      setForm({ ...form, phoneNumber: e.target.value })
                    }
                    value={form.phoneNumber}
                    required
                  ></input>
                </div>

                <div className="modal-footer registerFormModalFooter">
                  <button
                    className="btn btn-danger mt-2"
                    type="button"
                    data-bs-dismiss="modal"
                    onClick={closeHandler}
                  >
                    Close
                  </button>
                  <button className="btn btn-primary  mt-2" type="submit">
                    REGISTER
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
