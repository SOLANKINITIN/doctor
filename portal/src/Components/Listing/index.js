import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { getFormattedString } from "Helper";
import useStyles from "./style";

const Listing = props => {
  const classes = useStyles();

  const { data, keys, limit, config } = props;

  if (limit && (data.data || []).length >= limit) {
    data.data = (data.data || []).slice(0, limit);
  }

  if (data.loading) {
    return <div>Loading Data...</div>;
  }

  if (!data.loading && data.error) {
    return <div>Something Went Wrong....</div>;
  }

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            {Object.values(keys || {}).map((element, key) => (
              <TableCell key={key}>{getFormattedString(element)}</TableCell>
            ))}
            {Boolean((config || {}).edit) && <TableCell>Edit</TableCell>}
            {Boolean((config || {}).delete) && <TableCell>Delete</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {(data.data || []).map((element, index) => (
            <TableRow
              className={classes.listContainer}
              onDoubleClick={() =>
                props.onClick ? props.onClick(element) : () => {}
              }
              key={index}
            >
              {Object.keys(keys || {}).map((d, key) => (
                <TableCell key={key}>
                  {getFormattedString(element[d])}
                </TableCell>
              ))}
              {Boolean((config || {}).edit) && (
                <TableCell
                  onClick={() =>
                    props.onEdit ? props.onEdit(element) : () => {}
                  }
                >
                  <IconButton >
                    <EditIcon color="primary" />
                  </IconButton>
                </TableCell>
              )}
              {Boolean((config || {}).delete) && (
                <TableCell
                  onClick={() =>
                    props.onDelete ? props.onDelete(element) : () => {}
                  }
                >
                  <IconButton>
                    <DeleteIcon color="secondary"/>
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {!data.loading && data.data && !data.data.length && (
        <Typography
          style={{ textAlign: "center" }}
          color="textSecondary"
          variant="body1"
        >
          No Data found
        </Typography>
      )}
    </div>
  );
};

export default Listing;
