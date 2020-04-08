import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Config from 'Config';

import Home from 'Pages/Home';
import Login from 'Pages/Login';
import Register from 'Pages/Register';
import Forgotpassword from 'Pages/ForgotPassword/index.js';
import HospitalListing from 'Pages/HospitalListing';
import HospitalAdd from 'Pages/HospitalAdd';
import DoctorAdd from './DoctorAdd';
import NotFoundView from './NotFoundView';
import HospitalDetail from 'Pages/HospitalsDetail';
import Profile from 'Pages/Profile';
import Order from 'Pages/Order';
import OtpVerification from 'Pages/OTP VERIFICATION';
import CategoryAddPage from 'Pages/Category';
import CategoryListing from 'Pages/CategoryListing';
import ExpressFirebase from 'express-firebase';
import { AuthServices } from 'Services';
import Resetpassword from 'Pages/ResetPassword';
import UpdateHospitalDetails from 'Pages/UpdateHospital';
import Analytics from 'Pages/Analytics';
import Users from 'Pages/User';
import MainHomePage from 'Pages/MainHomePage';
import ContactUs from 'Pages/ContactUs';

ExpressFirebase.connect(Config.FIREBASE_CONFIG);

const PrivateRoute = ({ component: Component, ...rest }) => {
  const render = (props) => {
    if (!AuthServices.isAuthenticated()) {
      return <Redirect to='/login' />;
    }
    if (rest.admin && !AuthServices.isAdmin()) {
      // Logout User
      AuthServices.logout();
      return <Redirect to='/login' />;
    }
    return <Component {...props} />;
  };

  return <Route {...rest} render={render} />;
};

class Root extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/forgotpassword' component={Forgotpassword} />
          {/* <Route exact path="/mainhome" component={MainHomePage} /> */}

          <Route
            exact
            path='/reset/:resetPasswordToken'
            component={Resetpassword}
          />
          <PrivateRoute exact path='/contactus' component={ContactUs} />

          <PrivateRoute exact path='/' component={MainHomePage} />
          <PrivateRoute exact path='/home' component={Home} />
          <PrivateRoute exact path='/analytics' component={Analytics} admin />

          <PrivateRoute
            exact
            path='/updatehospital/:hospitalId'
            component={UpdateHospitalDetails}
            admin
          />
          <PrivateRoute exact path='/hospital' component={HospitalListing} />
          <PrivateRoute
            exact
            path='/add/hospital'
            component={HospitalAdd}
            admin
          />
          <PrivateRoute
            exact
            path='/hospital/:hospitalId'
            component={HospitalDetail}
          />
          <PrivateRoute
            exact
            path='/add/doctor/:hospitalId'
            component={DoctorAdd}
            admin
          />
          <PrivateRoute
            exact
            path='/category'
            component={CategoryAddPage}
            admin
          />
          <PrivateRoute exact path='/profile' component={Profile} />
          <PrivateRoute exact path='/order' component={Order} />
          <PrivateRoute exact path='/otp' component={OtpVerification} />
          <PrivateRoute
            exact
            path='/category/list'
            component={CategoryListing}
          />

          <PrivateRoute exact path='/users' component={Users} admin />

          <Route component={NotFoundView} />
        </Switch>
      </Router>
    );
  }
}
export default Root;
