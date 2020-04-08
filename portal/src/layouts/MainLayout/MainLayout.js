import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Chat } from "Components";
import { useHistory } from "react-router-dom";
import { AuthServices } from "Services";

const MainLayout = props => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const history = useHistory();

  const handleDrawerMenuClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = e => {
    if (e) {
      e.preventDefault();
    }
    AuthServices.logout();
    history.replace("/");
  };

  return (
    <div className="wrapper">
      <Sidebar open={drawerOpen} onCloseDrawer={handleDrawerMenuClick} />
      <div className="content-page">
        <div className="content">
          <Header
            onDrawerMenuClick={handleDrawerMenuClick}
            handleLogout={handleLogout}
          />
          <div style={{ padding: "30px 10px"}}>{props.children}</div>
        </div>
        <Footer />
      </div>
      <Chat />
    </div>
  );
};

export default MainLayout;
