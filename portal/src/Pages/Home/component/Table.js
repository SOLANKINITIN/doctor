import React, { useState, useEffect } from "react";

import {
  Typography,
  TableRow,
  TableCell,
  Table,
  Card,
  Container
} from "@material-ui/core";
import { NetworkServices } from "Services";
import Config from "Config";

const Hospitals = (props) => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const fetchHospital = async () => {
      try {
        const response = await NetworkServices.get(
          `${Config.SERVER_URL}/limitedhospitals`
        );
        const data = await response.data;
        setHospitals(data);
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchHospital();
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <Container>
        <Card style={{ border: "none", boxShadow: "none" }}>
          <Table>
            <TableRow>

              {Boolean && <TableCell style={{ fontWeight: "bold", textAlign: "center" }}>
                {props.name}
              </TableCell>}
              {Boolean &&
                <TableCell
                  TableCell
                  style={{ fontWeight: "bold", textAlign: "left" }}>
                  {props.address}
                </TableCell>}
              {Boolean && <TableCell
                TableCell
                style={{ fontWeight: "bold", textAlign: "center" }}>
                {props.no}
              </TableCell>}
              {Boolean && <TableCell
                TableCell
                style={{ fontWeight: "bold", textAlign: "center" }}>
                {props.email}
              </TableCell>}

            </TableRow>
            {hospitals &&
              hospitals.map((hospital, key) => (
                <TableRow key={key}>
                  <TableCell align="center">{hospital.hospitalName}</TableCell>
                  <TableCell align="left">{hospital.address}</TableCell>
                  <TableCell align="center">{hospital.mobileNo}</TableCell>
                  <TableCell align="center">{hospital.emailId}</TableCell>
                </TableRow>
              ))}
          </Table>
        </Card>
      </Container>
    </div>
  );
};

export default Hospitals;
