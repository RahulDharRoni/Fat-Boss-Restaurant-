import { useContext, useEffect, useState } from "react";
import "./signup.css";
import {
  LoadCanvasTemplateNoReload,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useNavigate } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoYoutube,
} from "react-icons/bi";
import { AuthContext } from "../../../providers/AuthProvider";
import logo from "../../../assets/logoo.png";
import Swal from "sweetalert2";

const Signup = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { createUser } = useContext(AuthContext);

  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleValidateCaptcha = (e) => {
    const get_captcha_value = e.target.value;
    if (validateCaptcha(get_captcha_value)) {
      setDisabled(false);
    } else {
      alert("Captcha Does Not Match");
      setDisabled(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    console.log(state.email, state.password);
    createUser(state.email, state.password)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User created successfully.",
          showConfirmButton: false,
          timer: 1000,
        });
        
      })
      .catch((error) => console.log(error));
    navigate("/");
  };

  return (
    <div>
      <div className="signup-1">
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
            <div className="basis-1/2 form-info">
              <div className="form-section">
                <div className="logo clearfix">
                  <a href="/">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
                <h3>Sign Up Now</h3>
                <div className="login-inner-form">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group form-box">
                      <input
                        type="text"
                        name="name"
                        className="form-control  form-box"
                        value={state.name}
                        placeholder="Full Name"
                        onChange={handleInputChange}
                      />
                      <i className="flaticon-mail-2"></i>
                    </div>
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
                    <label htmlFor="">
                      <LoadCanvasTemplateNoReload />
                    </label>
                    <div className=" form-group form-box">
                      <input
                        onBlur={handleValidateCaptcha}
                        type="text"
                        name="captcha"
                        placeholder="type the captcha above"
                        className="form-control form-box"
                      />
                      <i className="flaticon-password"></i>
                    </div>

                    <div className="mb-0">
                      <input
                        disabled={disabled}
                        className="btn-md btn-theme w-full"
                        type="submit"
                        value="Login"
                      />
                    </div>
                    <p className="text flex justify-between">
                      Already have an account?
                      <Link to="/login">Login Now</Link>
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

export default Signup;
