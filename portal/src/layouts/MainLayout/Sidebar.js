/* eslint jsx-a11y/anchor-is-valid: 0 */
import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

import { Accordion } from "react-bootstrap";

import { ScrollView, SVGImage } from "Components";
import styles from "./Sidebar.module.scss";

import { adminRoutes, userRoutes } from "./layout-routes";
import { AuthServices } from "Services";

class Sidebar extends React.Component {
  handlePreventAnchorAction = e => {
    e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <div
          id="vertical-sidebar-placeholder"
          className={classNames(styles.sidebar, {
            "sidebar-enable": this.props.open
          })}
        >
          <div className={`left-side-menu ${styles.leftSideMenu}`}>
            <ScrollView useSlipScroll className="slimscroll-menu">
              <a href="index.html" className="logo text-center">
                <span className="logo-lg">
                  <SVGImage
                    src={require("assets/images/logo.svg")}
                    alt=""
                    id="side-main-logo"
                  />
                </span>
                <span className="logo-sm">
                  <img
                    src={require("assets/images/logo-sm.png")}
                    alt=""
                    height="32"
                    id="side-sm-main-logo"
                  />
                </span>
              </a>
              <Accordion>
                <ul className="metismenu side-nav">
                  <li className={`side-nav-title side-nav-item`}>Navigation</li>
                  {AuthServices.isAdmin() &&
                    adminRoutes.map((element, key) => (
                      <li className={`side-nav-item`} key={key}>
                        <Link
                          to={element.path}
                          className={`side-nav-link ${styles.sideNavLink}`}
                        >
                          <element.Icon className={styles.navIcon} />
                          <span> {element.title} </span>
                        </Link>
                      </li>
                    ))}
                  {AuthServices.isNormalUser() &&
                    userRoutes.map((element, key) => (
                      <li className={`side-nav-item`} key={key}>
                        <Link
                          to={element.path}
                          className={`side-nav-link ${styles.sideNavLink}`}
                        >
                          <element.Icon className={styles.navIcon} />
                          <span> {element.title} </span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </Accordion>
              <div className="clearfix"></div>
            </ScrollView>
          </div>
        </div>
        <div id="detached-sidebar-placeholder"></div>
        <div
          className={classNames({ [styles.overlay]: this.props.open })}
          onClick={this.props.onCloseDrawer}
        ></div>
      </React.Fragment>
    );
  }
}

export default Sidebar;
