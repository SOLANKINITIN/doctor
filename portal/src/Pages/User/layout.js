import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "Store/selectors";
import {
  Typography,
  TableRow,
  TableCell,
  Table,
  IconButton,
  CircularProgress,
  Card
} from "@material-ui/core";
import { fetchUsers } from "Store/action";
import * as Helper from "Helper";
import DeleteIcon from "@material-ui/icons/Delete";
import { NetworkServices } from "Services";
import config from "Config";

const Layout = () => {
  const users = useSelector(selectUsers);

  useEffect(() => {
    fetchUsers();
  }, []);

  if (users.loading) {
    return (
      <div style={{}}>
        <CircularProgress
          size={50}
          style={{
            display: "flex",
            margin: "0 auto",

            alignItems: "center",
            minHeight: "70vh"
          }}
        />
      </div>
    );
  }

  const handleDeleteUser = async user => {
    try {
      await NetworkServices.delete(`${config.SERVER_URL}/users/${user._id}`);

      Helper.openGlobalMessageBox({
        title: "Doctor AI",
        message: "User Deleted Successfully",
        type: "success"
      });
      fetchUsers();
    } catch (err) {
      Helper.openGlobalMessageBox({
        title: "Doctor AI",
        message: "Something went wrong while deleting user. Please try again",
        type: "error"
      });
    }
  };

  const handleAdminChange = async (userId, e) => {
    const isAdmin = JSON.parse(e.target.value);
    const _id = userId._id;

    try {
      await NetworkServices.post(
        `${config.SERVER_URL}/users/changeAdminStatus`,
        {
          userId: _id,
          isAdmin: isAdmin
        }
      );
      Helper.openGlobalMessageBox({
        title: "Doctor AI",
        message: `Admin Right Change Successfully for ${userId.username}`,
        type: "success"
      });
    } catch (err) {
      Helper.openGlobalMessageBox({
        title: "Doctor AI",
        message: "Something went wrong To Change Admin Right. Please try again",
        type: "error"
      });
    }
  };

  return (
    <div>
      <Card style={{ border: "none", boxShadow: "none", padding: "1rem" }}  >
        <Typography variant="h5">Users</Typography>
        {users.loading && <Typography>Loading Users</Typography>}
        <Table>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>Hospital Id</TableCell>
            <TableCell>Delete User</TableCell>
          </TableRow>
          {!users.loading &&
            users.data &&
            users.data.map(element => (
              <TableRow>
                <TableCell>{element.username}</TableCell>
                <TableCell>
                  <select
                    onChange={e => handleAdminChange(element, e)}
                    defaultValue={String(element.isAdmin)}>
                    <option value="true">true</option>
                    <option value="false">false</option>
                  </select>
                </TableCell>
                <TableCell>
                  {Helper.getFormattedString(element.hospitalId)}
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDeleteUser(element)}>
                    <DeleteIcon color="secondary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </Table>
        {!users.loading && !Boolean(users.data) && (
          <Typography>No Data available</Typography>
        )}
      </Card>
    </div>
  );
};

export default Layout;
