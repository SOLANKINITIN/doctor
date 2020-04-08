// import { getAvatarName } from '@app/helpers/common.helpers';
import React from "react";
import { Link } from "react-router-dom";
import { getAvatarName } from "Helper";
import { AuthServices } from "Services";

class Header extends React.Component {
  render() {
    const { onDrawerMenuClick } = this.props;

    return (
      <React.Fragment>
        <div id="vertical-topbar-placeholder">
          <div className="navbar-custom">
            <ul className="list-unstyled topbar-right-menu float-right mb-0">
              <li className="dropdown notification-list">
                <Link
                  className="nav-link dropdown-toggle nav-user arrow-none mr-0"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                  to="/profile">
                  <span className="account-user-avatar">
                    <div
                      style={{ width: 32, height: 32 }}
                      className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center">
                      <span>
                        {getAvatarName((AuthServices._auth || {}).username)}
                      </span>
                    </div>
                  </span>
                  <span>
                    <span className="account-user-name">
                      {(AuthServices._auth || {}).username}
                    </span>
                    <span className="account-position">Doctor AI</span>
                  </span>
                </Link>
              </li>

              <li className="notification-list topbar-dropdown d-lg-block">
                <button
                  className="nav-link dropdown-toggle arrow-none btn btn-link right-bar-toggle"
                  onClick={this.props.handleLogout}>
                  <i className="dripicons-gear noti-icon"></i>
                </button>
              </li>
            </ul>
            <button
              className="button-menu-mobile open-left disable-btn"
              onClick={onDrawerMenuClick}>
              <i className="mdi mdi-menu"></i>
            </button>
            <div className="app-search">
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="mdi mdi-magnify"></span>
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="horizontal-topbar-placeholder"></div>
      </React.Fragment>
    );
  }
}

export default Header;
