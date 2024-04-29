import { useContext, useState } from "react";
import "./login.css";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoYoutube,
} from "react-icons/bi";
import logo from "../../../assets/logo_b.png";
const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    signIn(state.email, state.password).then((result) => {
      console.log(result.user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    });
    navigate("/");
  };
  return (
    <div>
      <div className="login-2">
        <div className="container">
          <div className="m-10 login-box flex b">
            <div className="basis-1/2  bg-img">
              <div className="info">
                <div className="info-text">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when
                  </p>
                  <div className="social-buttons">
                    <div className="social-buttons">
                      <Link
                        to=""
                        className="social-button social-button-facebook"
                      >
                        <BiLogoFacebook className="text-2xl p-0 m-0 hover:text-white" />
                      </Link>
                      <Link
                        to=""
                        className="social-button social-button-facebook"
                      >
                        <BiLogoYoutube className="text-2xl p-0 m-0 hover:text-white" />
                      </Link>
                      <Link
                        to=""
                        className="social-button social-button-facebook"
                      >
                        <BiLogoLinkedin className="text-2xl p-0 m-0 hover:text-white" />
                      </Link>
                      <Link
                        to=""
                        className="social-button social-button-facebook"
                      >
                        <BiLogoInstagram className="text-2xl p-0 m-0 hover:text-white" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/2 form-info">
              <div className="form-section">
                <div className="logo clearfix flex items-center justify-center">
                  <a href="/">
                    <img src={logo} alt="logo" className="" />
                  </a>
                </div>
                <h3>Sign Into Your Account</h3>
                <div className="login-inner-form">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group form-box">
                      <input
                        type="text"
                        name="email"
                        className="form-control  form-box"
                        value={state.email}
                        placeholder="Email Address"
                        onChange={handleInputChange}
                      />
                      <i className="flaticon-mail-2"></i>
                    </div>
                    <div className=" form-group form-box">
                      <input
                        className="form-control form-box"
                        type="password"
                        name="password"
                        value={state.password}
                        placeholder="Password"
                        aria-label="Password"
                        onChange={handleInputChange}
                      />
                      <i className="flaticon-password"></i>
                    </div>

                    <div className=" mb-0">
                      <button className=" btn-md btn-theme w-full">
                        Login
                      </button>
                    </div>
                    <p className="text flex justify-between">
                      Dont have an account?
                      <Link to="/signup">Register here</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
