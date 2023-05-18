import classes from "./Layout.module.css";

import { Outlet } from "react-router";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Layout = () => {
  return (
    <div className={classes.layout__container}>
      <Header />
      <main className={classes.main__container}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
