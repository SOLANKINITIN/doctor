import React, { useState } from "react";
import useStyles from "./style";
import { Header, InputComponent } from "Components";
import LockIcon from "@material-ui/icons/Lock";

import {
  Button,
  Container,
  Link,
  Typography
} from "@material-ui/core";

import PersonAddIcon from "@material-ui/icons/PersonAdd";

//For Data Retriving from the redux
import { AuthServices } from "Services";
import { useHistory } from "react-router-dom";
import { openGlobalMessageBox } from "Helper";

const Layout = () => {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);

    if (!email && !password) {
      return openGlobalMessageBox({
        title: "Doctor AI",
        message: "All Field is required",
        type: "error"
      });
    }
    if (!email) {
      return openGlobalMessageBox({
        title: "Doctor AI",
        message: "Email is required",
        type: "error"
      });
    }
    if (!password) {
      return openGlobalMessageBox({
        title: "Doctor AI",
        message: "Password is required",
        type: "error"
      });
    }
    const EmailPatten = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!EmailPatten.test(email)) {
      return openGlobalMessageBox({
        title: "Doctor AI",
        message: "Please enter valid email",
        type: "error"
      });
    }
    //Api Calling
    try {
      await AuthServices.signup(email, password);
      openGlobalMessageBox({
        title: "Doctor AI",
        message:
          "Welcome to Doctor AI. Explore the new world of health department with power of AI",
        type: "success"
      });
      history.push("/");
    } catch (err) {
      openGlobalMessageBox({
        title: "Doctor AI",
        message: err.response.data.data.message || "User is Already Register",
        type: "error"
      });
    } finally {
      setEmail("");
      setPassword("");
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Header title="Register" />
      <div>
        <Container className={classes.Container} maxWidth="md">
          <div className={classes.SingUp}>
            <div className={classes.SignUpContent}>
              <div className={classes.SignUpForm}>
                <form className={classes.SignUpForm}>
                  <div className={classes.SignUpFormInput}>
                    <Typography variant="h3" className={classes.FormTitle}>
                      Register
                    </Typography>
                    <InputComponent
                      placeholder="Email id"
                      type="email"
                      Icon={PersonAddIcon}
                      onChange={e => setEmail(e.target.value)}
                    />
                    <InputComponent
                      placeholder="password"
                      type="password"
                      Icon={LockIcon}
                      onChange={e => setPassword(e.target.value)}
                    />
                    <div className={classes.Button}>
                      <Button
                        variant="contained"
                        onClick={handleSubmit}
                        color="primary"
                        className={classes.SignUpButton}
                        disabled={isSubmitting}
                      >
                        Register
                      </Button>
                    </div>
                    <div className={classes.links}>
                      <Link
                        className={classes.link}
                        onClick={() => history.push("/login")}
                      >
                        Already Have An Account? Login
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
              <div className={classes.signUpImage}>
                <figure>
                  <img
                    src="./images/signup-image.png"
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
