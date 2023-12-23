import { Fragment, useState } from "react";
import { UsersService } from "../../libs/UsersService";
import { LoginRepository } from "../../libs/repository/LoginRepository";
import './LoginModal.css'

const usersService = new UsersService();
const logingRepository = new LoginRepository();

export function LoginModal(props) {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showErrorMessage,setShowErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const loginModal = document.getElementById('loginModal');
  
  if (loginModal) {
    loginModal.addEventListener('hide.bs.modal', function (event) {
      if (event.target === loginModal) {
          closeHandler()
      }
    });
  }
  


  
  // const login = async (email, password) => {
  //   props.loaderSwitcher(true);
  //   await usersService.loginUser(email, password).then((user) => {
  //     props.loaderSwitcher(false);
  //     if (user) props.loginHandler();
  //     logingRepository.save({ email: user.email, id: user.id });
  //   });
  // };
  
  
  const login = async (email, password) => {
    setLoading(true)
    try {
      const user = await usersService.loginUser(email, password);
      // props.loaderSwitcher(false);  

      if (user) {
        props.loginHandler();
        logingRepository.save({ email: user.email, id: user.id });
        // Close the modal after successful login
        setShowModal(false);
      } else {
        setError('Invalid credentials');
        setShowErrorMessage(true);   
      }
    } catch (error) {
      setError('An error occurred'); 
      setShowErrorMessage(true)
    } finally {
      setShowModal(true)
      setLoading(false) 
    }    
  };

 
  const closeHandler = () => {
    setEmail("");
    setPassword("");
    setShowErrorMessage(false);
    setShowModal(false); 
  };

  return (
    <Fragment>
        {
          loading ? 
        (
          <div className="spinner"></div>
        ) : (
      <div
        className={`modal fade ${showModal ? 'show' : ''}`} 
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog loginModal">
          <div className="modal-content loginModalBox
          ">
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
                  setEmail("");
                  setPassword("");
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

                {showErrorMessage ? (<p className="text-danger">* Wrong credentials! Please try again.</p>) : (<p></p>)}

                <div className="modal-footer loginModalFooter">
                  <button
                    className="btn btn-outline-danger mt-2"
                    type="button"
                    data-bs-dismiss="modal"
                    onClick={closeHandler}
                  >
                    Close
                  </button>
                  <button
                    className="btn btn-outline-warning mt-2"
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
      )
      }
    </Fragment>
  );
}
