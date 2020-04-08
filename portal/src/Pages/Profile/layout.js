import React, {useState} from "react";
import useStyle from "./style";
import {
  Card,
  Container,
  CardContent,
  Avatar,
  Typography,
  Button
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { InputComponent } from "Components";
import { AuthServices, NetworkServices } from "Services";
import { handleError } from "Store/helper";
import config from "Config";
import { openGlobalMessageBox } from "Helper";

const Layout = () => {
  const classes = useStyle();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [submitting,setSubmitting] = useState(false);

  const handlePasswordChange = async () => {
    setSubmitting(true);
    try {
      const userId = AuthServices._auth._id;
      const response = await NetworkServices.post(`${config.SERVER_URL}/users/changePassword`,{oldPassword,newPassword,userId});
      if(!response.success){
        return openGlobalMessageBox({
          title:'Doctor AI',
          message:response.data,
          type:'error',
        });
      }
      openGlobalMessageBox({
        title:'Dotor AI',
        message:'Password change successfully',
        type:'success',
      });
    } catch (err) {
      handleError(err);
    }finally{
      setSubmitting(false);
      setOldPassword('');
      setNewPassword('');
    }
  };

  return (
    <div className={classes.patientpage}>
      <Container className={classes.container} maxWidth="lg">
        <Card className={classes.root}>
          <CardContent>
            <div>
              <Avatar src="/broken-image.jpg" className={classes.avatar} />
              <Typography
                variant="body1"
                align="center"
                style={{ margin: "20px 0px" }}
              >
                {AuthServices._auth.username}
              </Typography>
              <InputComponent
                placeholder="Old Password"
                Icon={LockIcon}
                onChange={e => setOldPassword(e.target.value)}
              />
              <InputComponent
                placeholder="New Password"
                Icon={LockIcon}
                onChange={e => setNewPassword(e.target.value)}
              />
              <div style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ marginTop: "2rem" }}
                  onClick={handlePasswordChange}
                  disabled={submitting}
                >
                  Update
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};
export default Layout;
