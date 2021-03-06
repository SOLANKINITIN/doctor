import React, { useEffect, useState } from "react";
import useStyles from "./style";
import {
  Container,
  CardContent,
  Card,
  Typography,
  Button,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import Call from "@material-ui/icons/Call";
import Address from "@material-ui/icons/LocationCity";
import Web from "@material-ui/icons/VpnLock";
import Check from "@material-ui/icons/CheckCircle";
import { useRouteMatch, useHistory } from "react-router-dom";
import {
  fetchHospitalDetail,
  addPatient,
  fetchCategory,
  sendMail
} from "Store/action";
import { selectHospitalDetail, selectCategories, mail } from "Store/selectors";
import { useSelector } from "react-redux";
import { InputComponent } from "Components";
import { handleError } from "Store/helper";
import { AuthServices } from "Services";
import { Snackbar } from "Components";
import * as Helper from "Helper";
import { CircularProgress } from "@material-ui/core";

const Layout = () => {
  const classes = useStyles();
  const match = useRouteMatch();
  const history = useHistory();
  const hospitalDetail = useSelector(selectHospitalDetail);
  const categoryListing = useSelector(selectCategories);
  const MailDetails = useSelector(mail);
  const [patientName, setPatientName] = useState();
  const [age, setAge] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [description, setDescritpition] = useState();
  const [zender, setZender] = useState();
  const [loading, isLoading] = useState(false);

  const [category, setCategory] = useState(1);

  const [state, setState] = useState({
    isOpen: false,
    variant: "error",
    message: ""
  });

  //for Dialog
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleClickOpen = async () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handlePatientBooking = async () => {
    try {
      const patientEmailId = JSON.parse(localStorage.getItem("panther"));
      let patientEmail = patientEmailId;
      let hospitalEmail = hospital.emailId;

      if (!patientName || !patientEmail || !zender) {
        return Helper.openGlobalMessageBox({
          title: "Doctor AI",
          message: "Filed IS required",
          type: "error"
        });
      }
      if (!patientName) {
        return Helper.openGlobalMessageBox({
          title: "Doctor AI",
          message: "Please Enter Patinet name",
          type: "error"
        });
      }
      if (contactNumber > 10 && contactNumber < 10) {
        return Helper.openGlobalMessageBox({
          title: "Doctor AI",
          message: "Please Enter valid Contact Number",
          type: "error"
        });
      }
      if (!patientEmail) {
        return Helper.openGlobalMessageBox({
          title: "Doctor AI",
          message: "Age is Required",
          type: "error"
        });
      }
      if (!zender) {
        return Helper.openGlobalMessageBox({
          title: "Doctor AI",
          message: "Please Select Your Age",
          type: "error"
        });
      }
      // Api Calling Will be here
      //to Sending a mail to hospital adn patient
      isLoading(true);
      await sendMail({ patientEmail, hospitalEmail });
      isLoading(false);
      //Adddin Patinet
      await addPatient({
        patientName,
        contactNumber,
        age,
        diseaseDescription: description,
        userId: (AuthServices._auth || {})._id,
        hospitalId: match.params.hospitalId,
        categoryId: category,
        zender
      });
    } catch (err) {
      handleError(err.response);
    } finally {
      setPatientName(null);
      setAge(null);
      setContactNumber(null);
    }
  };

  useEffect(() => {
    if (match.params.hospitalId) {
      fetchHospitalDetail(match.params.hospitalId);
    }
  }, [match]);

  if (hospitalDetail.loading) {
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

  if (!hospitalDetail.loading && !hospitalDetail.data) {
    return <div>Something went wrong...</div>;
  }
  const hospital = hospitalDetail.data;

  return (
    <div className={classes.Hospitaldetails}>
      <Snackbar
        errorMessage={state.message}
        isOpen={state.isOpen}
        variant={state.variant}
        handleClose={() => setState({ isOpen: false })}
      />

      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.hospitalInfo}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} lg={4}>
              <Card style={{ boxShadow: "none" }}>
                <CardContent>
                  <div className={classes.hospitalsection}>
                    <img
                      src={hospital.thumbnailImage}
                      alt="HospitalBanner"
                      className={classes.hospitalImage}
                    />
                    <div>
                      <Typography variant="h6">
                        {hospital.hospitalName}
                      </Typography>
                      <Typography
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 10
                        }}
                        variant="body2">
                        <Call color="primary" />
                        {hospital.mobileNo.map((number, key) => (
                          <span key={key}>{number}</span>
                        ))}
                      </Typography>
                      <Typography
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 10,
                          marginBottom: 10
                        }}
                        variant="body2">
                        <Address color="primary" /> {hospital.address}
                      </Typography>
                      <Typography
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexWrap: "wrap"
                        }}
                        variant="body2">
                        <Web color="primary" fontSize="small" />{" "}
                        {hospital.emailId}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "1rem" }}
                        onClick={handleClickOpen}>
                        Admit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} lg={8}>
              <Card style={{ boxShadow: "none" }}>
                <CardContent>
                  <Typography variant="h5">Description</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ marginTop: 10, marginBottom: 10 }}>
                    {hospital.description}
                  </Typography>
                  <div className={classes.category}>
                    <Typography variant="h5">Category</Typography>
                    <div className={classes.categorysection}>
                      {Boolean(hospital.category) &&
                        hospital.category.map(category => (
                          <Typography
                            variant="body1"
                            style={{ display: "flex", alignItems: "center" }}>
                            <Check
                              color="primary"
                              fontSize="small"
                              style={{ marginRight: 5 }}
                            />
                            {category.title}
                          </Typography>
                        ))}
                      {!Boolean(hospital.category.length) && (
                        <Typography color="textSecondary">
                          No Category found this hospital
                        </Typography>
                      )}
                    </div>
                  </div>
                  <div className={classes.hospitaldoctor}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}>
                      <Typography variant="h5">Doctors</Typography>
                      {AuthServices.isAuthenticated() &&
                        AuthServices.isAdmin() && (
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={() =>
                              history.push(
                                `/add/doctor/${match.params.hospitalId}`
                              )
                            }>
                            Add Doctor
                          </Button>
                        )}
                    </div>
                    <div className={classes.doctors}>
                      {Boolean(hospital.doctors.length) &&
                        hospital.doctors.map(doctor => (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              flexDirection: "column"
                            }}>
                            <img
                              src={doctor.thumbnailImage}
                              alt="HospitalBanner"
                              className={classes.doctorImage}
                            />
                            <Typography variant="body1">
                              {doctor.doctorName}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              {doctor.degree}
                            </Typography>
                          </div>
                        ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>

        {/* For Dialog Box */}
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap"
              }}>
              <DialogTitle id="form-dialog-title">Patient Details</DialogTitle>
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            <Divider />

            <DialogContent>
              <InputComponent
                placeholder="Patient Name"
                onChange={e => setPatientName(e.target.value)}
                value={patientName}
              />
              <Grid container>
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={6}>
                    <InputComponent
                      placeholder="Age"
                      onChange={e => setAge(e.target.value)}
                      value={age}
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <InputComponent
                      placeholder="Contact Number"
                      onChange={e => setContactNumber(e.target.value)}
                      value={contactNumber}
                      type="number"
                    />
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <FormControl style={{ flex: 1, display: "flex" }}>
                      <InputLabel>Select Category</InputLabel>
                      <Select
                        id="demo-simple-select"
                        fullWidth
                        value={category}
                        onChange={e => setCategory(e.target.value)}>
                        <MenuItem value={1}>Select</MenuItem>
                        {(categoryListing.data || []).map((element, key) => (
                          <MenuItem value={element._id} key={key}>
                            {element.title}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <FormControl style={{ flex: 1, display: "flex" }}>
                      <InputLabel>Select Zender</InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={zender ? zender : ""}
                        onChange={e => setZender(e.target.value)}>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <InputComponent
                placeholder="Description"
                onChange={e => setDescritpition(e.target.value)}
                value={description}
              />
            </DialogContent>
            <Button
              variant="contained"
              style={{ margin: 10 }}
              color="primary"
              onClick={handlePatientBooking}>
              {loading && <CircularProgress />}
              {MailDetails.data === null ? "Send" : "Send Succesfully"}
            </Button>
          </Dialog>
        </div>
      </Container>
    </div>
  );
};

export default Layout;
