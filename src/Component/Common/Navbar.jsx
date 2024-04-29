import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => console.log(error));
  };
  return (
    <section className="absolute top-0 z-20 w-full">
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-3xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black bg-slate-200"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ourMenu">Menu</Link>
              </li>
              <li>
                <Link to="/shop/all">Shop</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {user ? (
                <li>
                  <button onClick={handleLogOut}>Sign Up</button>
                </li>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ourMenu">Menu</Link>
            </li>
            <li>
              <Link to="/shop/all">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/event_arraignment">Book Events</Link>
            </li>
            {user ? (
              <li>
                <button onClick={handleLogOut}>Sign Up</button>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn">Button</Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
