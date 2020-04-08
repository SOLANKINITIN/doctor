import React, { useState, useEffect } from "react";

import useStyles from "./style";
import {
  Button,
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress
} from "@material-ui/core";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import ArrowDowmIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import FaceIcon from "@material-ui/icons/Face";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import * as moment from "moment-timezone";

import CardComponent from "./components/card.component";
import BarChartComponent from "./components/barchart.component";
import LineChartComponent from "./components/linechart.component";
import { useSelector } from "react-redux";
import { selectAnalytics } from "Store/selectors";
import { fetchAnalytics } from "Store/action";
import store from "Store";
import { analyticsAction } from "Store/reducer";
import { getSafeInsightsInfo, getSafeInsightsCharts } from "mock";
import { getFormattedString } from "Helper";

//THIS IS BARCHRTDATA
const barchartData = [
  {
    name: "16 Mar 2020",
    male: 20,
    female: 24
  },
  {
    name: "17 Mar 2020",
    male: 30,
    female: 14
  },
  {
    name: "18 Mar 2020",
    male: 25,
    female: 35
  },
  {
    name: "19 Mar 2020",
    male: 27,
    female: 39
  },
  {
    name: "20 Mar 2020",
    male: 18,
    female: 48
  },
  {
    name: "21 Mar 2020",
    male: 35,
    female: 38
  },
  {
    name: "22 Mar 2020",
    male: 20,
    female: 50
  }
];

const Layout = () => {
  const classes = useStyles();
  const [dates, setDates] = useState({
    startDate: moment()
      .subtract(7, "days")
      .toDate(),
    endDate: moment().toDate(),
    key: "selection"
  });
  const [show, setShow] = useState(false);
  const analytics = useSelector(selectAnalytics);

  useEffect(() => {
    if (!analytics.initialized) {
      fetchAnalytics(
        moment(dates.startDate).toDate(),
        moment(dates.endDate).toDate()
      );
    }
  }, [analytics]);

  const handleDateChange = item => {
    if (item.selection) {
      if (
        item.selection.startDate.getTime() !== item.selection.endDate.getTime()
      ) {
        setShow(false);
        store.dispatch(analyticsAction.reset());
      }
      setDates(item.selection);
    }
  };

  if (analytics.loading) {
    return (
      <div style={{}}>
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
    <div className={classes.root}>
      <div className={classes.datePicker}>
        <Button
          variant="contained"
          className={classes.DatePickerButton}
          onClick={() => setShow(!show)}
          color="primary"
          endIcon={<ArrowDowmIcon />}>
          {moment(dates.startDate).format("DD MMM YYYY")} -{" "}
          {moment(dates.endDate).format("DD MMM YYYY")}
        </Button>
        {show && (
          <div className={classes.dateRangePicker}>
            <DateRange
              editableDateInputs={true}
              onChange={handleDateChange}
              moveRangeOnFirstSelection={false}
              ranges={[dates]}
              maxDate={new Date()}
            />
          </div>
        )}
      </div>
      <div className={classes.summary}>
        <div className={classes.cardContainer}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <CardComponent
                icon={PeopleAltIcon}
                count={getSafeInsightsInfo(analytics).user_count}
                title="Connected User"
                tooltipText="Number of user connected with us"
                loading={analytics.loading}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <CardComponent
                icon={LocalHospitalIcon}
                count={getSafeInsightsInfo(analytics).hospital_count}
                title="Connected Hospitals"
                tooltipText="Number of hospital connected with us"
                loading={analytics.loading}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <CardComponent
                icon={FaceIcon}
                count={getSafeInsightsInfo(analytics).doctor_count}
                title="Connected Doctor"
                tooltipText="Number of doctor connected with us"
                loading={analytics.loading}
              />
            </Grid>
          </Grid>
        </div>

        <div className={classes.cardContainer}>
          <Card style={{ padding: 10, boxShadow: "none", borderRadius: 5 }}>
            <Typography
              variant="h6"
              color="textSecondary"
              style={{ margin: 20 }}>
              Patients over time
            </Typography>
            <LineChartComponent
              data={getSafeInsightsCharts(analytics).patientsOverTime || []}
              xAxis="date"
              yAxis={["patient"]}
              colors={["#747BF3"]}
              loading={analytics.loading}
            />
          </Card>
        </div>
        <div className={classes.cardContainer}>
          <Card style={{ padding: 10, boxShadow: "none", borderRadius: 5 }}>
            <Typography
              variant="h6"
              color="textSecondary"
              style={{ margin: 20 }}>
              Patients over time by gender
            </Typography>
            <BarChartComponent
              data={barchartData}
              xAxis="name"
              yAxis={["male", "female"]}
              colors={["#747BF3", "#82CA9D"]}
              loading={analytics.loading}
            />
          </Card>
        </div>

        {/* table */}
        <Card className={classes.cardContainer} style={{ marginBottom: 60 }}>
          <Typography variant="h6" color="textSecondary" style={{ margin: 20 }}>
            Insights
          </Typography>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Day</TableCell>
                  <TableCell align="right">User</TableCell>
                  <TableCell align="right">Hospitals</TableCell>
                  <TableCell align="right">Doctors</TableCell>
                  <TableCell align="right">Patient</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {analytics.loading && <Typography>Loading...</Typography>}
                {!analytics.loading &&
                  analytics.data &&
                  analytics.data.insights.map((element, key) => (
                    <TableRow key={key}>
                      <TableCell component="th">
                        {moment(element.date).format("DD MMM YYYY")}
                      </TableCell>
                      <TableCell align="right">
                        {getFormattedString(element.userCount)}
                      </TableCell>
                      <TableCell align="right">
                        {getFormattedString(element.hospitalCount)}
                      </TableCell>
                      <TableCell align="right">
                        {getFormattedString(element.doctorCount)}
                      </TableCell>
                      <TableCell align="right">
                        {getFormattedString(element.patientCount)}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </div>
    </div>
  );
};

export default Layout;
