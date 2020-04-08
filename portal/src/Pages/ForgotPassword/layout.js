import React, { useState } from "react";
import useStyles from "./style";
import Header from "Components/Header";
import { Container, Typography, Button } from "@material-ui/core";
import Config from "Config";
import EmailIcon from "@material-ui/icons/Email";
import { handleError } from "Store/helper";
import { InputComponent } from "Components";
import ForgotpasswordIcon from "./Assets/forgot.svg";
import { NetworkServices } from "Services";
import { openGlobalMessageBox } from "Helper";

const Layout = () => {
  const classes = useStyles();
  const [username, setUsername] = useState();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    if (!username) {
      return openGlobalMessageBox({
        title: "Doctor AI",
        message: "Please enter valid email",
        type: "error"
      });
    }
    try {
      await NetworkServices.post(`${Config.SERVER_URL}/forgotPassword`, {
        username
      });
      openGlobalMessageBox({
        title: "Doctor AI",
        message:
          "An Email with Reset intruction Send In Your email Address,Kindly Check Your Email..",
        type: "success"
      });
    } catch (error) {
      handleError(error);
    } finally {
      setUsername("");
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className={classes.cabbooking}>
        <Header title="Forgot password" />
        <div className={classes.cabcontent}>
          <Container className={classes.container} maxWidth="sm">
            <div style={{ textAlign: "center" }}>
              <img
                src={ForgotpasswordIcon}
                alt="forgotpasswordicon"
                className={classes.forgotpasswordIcon}
              />
            </div>
            <form>
              <Typography
                variant="h6"
                align="center"
                className={classes.title}
                style={{ marginBottom: "2rem" }}>
                Verifying Email Please Enter Your Email
              </Typography>
              <InputComponent
                placeholder="Email id"
                onChange={e => setUsername(e.target.value)}
                fullWidth
                size="medium"
                type="email"
                Icon={EmailIcon}
                value={username}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                style={{ marginTop: 20 }}
                disabled={!username || submitting}
                fullWidth>
                Send Email
              </Button>
            </form>
          </Container>
        </div>
      </div>
    </div>
  );
};
export default Layout;
