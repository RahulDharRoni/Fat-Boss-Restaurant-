import "./App.css";
import Navbar from "./Component/Common/Navbar";
import Footer from "./Component/Common/Footer";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location);
  const pageLocation = location.pathname.includes("/login" || "/signup");
  return (
    <>
      {pageLocation || <Navbar />}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
