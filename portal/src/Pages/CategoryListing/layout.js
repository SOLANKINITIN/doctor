import React, { useEffect } from "react";

import { Listing } from "Components";
import { fetchCategory } from "Store/action";
import { selectCategories } from "Store/selectors";
import { useSelector } from "react-redux";
import { CircularProgress, Card } from "@material-ui/core";

const Layout = () => {
  const categoryListing = useSelector(selectCategories);

  useEffect(() => {
    fetchCategory();
  }, []);

  if (categoryListing.loading) {
    return (
      <div style={{}}>
        <CircularProgress
          size={50}
          style={{
            display: "flex",
            margin: "0 auto",
            alignItems: "center",
            minHeight: "70vh",
          }}
        />
      </div>
    );
  }

  return (
    <>
      <Card style={{ border: "none", boxShadow: "none" }}>

        <Listing
          data={categoryListing}
          keys={{
            title: "Category Name",
            description: "Description",
          }}
        />
      </Card>
    </>
  );
};

export default Layout;
