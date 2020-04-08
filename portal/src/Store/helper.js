import { openGlobalMessageBox } from "Helper";

export const handleError = err => {
  console.log(err);
  openGlobalMessageBox({
    title: "Doctor AI",
    message: err.message || ((err.response||{}).data||{}).data || "Something went wrong",
    type: "error"
  });
};
