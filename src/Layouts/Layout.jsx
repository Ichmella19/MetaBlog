import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ theme, setTheme }) => {
  return (
    <>
      <Header theme={theme} setTheme={setTheme} /> {/* ✅ TRANSMIS ici */}
      <Outlet />
        <Footer theme={theme} setTheme={setTheme} /> {/* ✅ TRANSMIS ici */}
    </>

  );
};

export default Layout;
