import Footer from "./Footer";
import {Navbar} from "./Navbar";
import styles from "../styles/Components.module.css";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      <div className="layout">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
