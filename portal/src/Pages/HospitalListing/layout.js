import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { Listing } from "Components";
import useStyles from "./style";
import { fetchHospitalListing } from "Store/action";
import { selectHospital } from "Store/selectors";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AuthServices, NetworkServices } from "Services";
import config from "Config";
import { openGlobalMessageBox } from "Helper";

import { CircularProgress } from '@material-ui/core'

const Layout = () => {
  const classes = useStyles();
  const hospitalListing = useSelector(selectHospital);
  const history = useHistory();

  useEffect(() => {
    fetchHospitalListing();
  }, []);

  const navigateHospitalDetail = element => {
    history.push(`/hospital/${element._id}`);
  };

  const hospitalEdit = element => {
    history.push(`/updatehospital/${element._id}`);
  };

  const deleteHospital = async element => {
    await NetworkServices.delete(
      `${config.SERVER_URL}/hospital/${element._id}`
    );
    openGlobalMessageBox({
      title: "Hospital",
      message: "Hospital Deleted Successfully",
      type: "error"
    });
    history.push('/');
  };

  if (hospitalListing.loading) {
    return (
      <div >
        <CircularProgress
          size={50}
          style={{
            display: "flex",
            margin: "0 auto",
            // justifyContent: "center",
            alignItems: "center",
            minHeight: "70vh"
          }}
        />
      </div>
    );
  }

  return (
    <div>
      <div className={classes.addbutton}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => history.push("/add/hospital")}
        >
          ADD HOSPITAL
        </Button>
      </div>
      <Listing
        data={hospitalListing}
        keys={{
          hospitalName: "Hospital Name",
          mobileNo: "Mobile Number",
          address: "Address"
        }}
        onClick={navigateHospitalDetail}
        config={AuthServices.isAdmin() ? { edit: true, delete: true } : null}
        onEdit={hospitalEdit}
        onDelete={deleteHospital}
      />
    </div>
  );
};

export default Layout;
