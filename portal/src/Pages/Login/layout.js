import React, { useState } from "react";
import useStyles from "./style";
import { Header, InputComponent } from "Components";
import LockIcon from "@material-ui/icons/Lock";

import {
  Typography,
  Container,
  Button,
  Link
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import { AuthServices } from "Services";
import { useHistory } from "react-router-dom";
import { openGlobalMessageBox } from "Helper";

const Layout = () => {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async e => {
    e.preventDefault();
    if (!email && !password) {
      return openGlobalMessageBox({
        title:'Doctor AI',
        message:'All fields is required',
        type:'error',
      });
    }
    if (!email) {
      return openGlobalMessageBox({
        title:'Doctor AI',
        message:'Email is required',
        type:'error'
      });
    }
    if (!password) {
      return openGlobalMessageBox({
        title:'Doctor AI',
        message:'Password is required',
        type:'error',
      });
    }
    const EmailPatten = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!EmailPatten.test(email)) {
      return openGlobalMessageBox({
        title:'Doctor AI',
        message:'Please enter valid email',
        type:'error',
      })
    }
    try {
      await AuthServices.login(email, password).then(() =>
        history.push("/")
      );
      openGlobalMessageBox({
        title:'Doctor AI',
        message:'Welcome to Doctor AI. Explore the new world of health department with power of AI',
        type:'success',
      });
    } catch (err) {
      openGlobalMessageBox({
        title:'Doctor AI',
        message:'No user found.. try to register user',
        type:'error',
      });
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className={classes.loginpage}>
      <Header title="Login" />
      <div>
        <Container className={classes.Container} maxWidth="md">
          <div className={classes.SingIn}>
            <div className={classes.SignInContent}>
              <div className={classes.SignInForm}>
                <form className={classes.SignInForm}>
                  <div className={classes.SignInFormInput}>
                    <Typography variant="h3" className={classes.FormTitle}>
                      Login
                    </Typography>
                    <InputComponent
                      placeholder="Email"
                      onChange={e => setEmail(e.target.value)}
                      Icon={PersonIcon}
                      size="medium"
                      className={classes.TextField}
                    />
                    <InputComponent
                      placeholder="Password"
                      onChange={e => setPassword(e.target.value)}
                      Icon={LockIcon}
                      size="medium"
                      className={classes.TextField}
                      type="password"
                    />
                    <div className={classes.Button}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                        className={classes.SigninButton}
                      >
                        Login
                      </Button>
                    </div>
                    <div className={classes.links}>
                      <Link
                        className={classes.link}
                        style={{ marginBottom: 3 }}
                        onClick={() => history.push("/forgotpassword")}
                      >
                        Forgot Password !!
                      </Link>
                      <Link
                        className={classes.link}
                        onClick={() => history.push("/register")}
                      >
                        New Here ?? Register Here
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
              <div className={classes.signInImage}>
                <figure>
                  <img
                    src="./images/signin-image.png"
                    alt="signin Referecence Pages"
                  />
                </figure>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Layout;
