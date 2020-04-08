import { isNullOrUndefined } from "util";
import { store } from "Store";
import { messageBoxAction } from "Store/reducer";

export const getFormattedString = element => {
  return isNullOrUndefined(element) ? "N/A" : element;
};

export const openGlobalMessageBox = args => {
  store.dispatch(messageBoxAction({ ...args, open: true }));
};

export const closeGlobalMessageBox = () => {
  store.dispatch(messageBoxAction({ open: false }));
};

export const getAvatarName = name => {
  if (!name) {
    return "D";
  }
  return String(name)[0].toUpperCase();
};

export const getSafeInsance = (path = [], fallback = {}) => {
  return object => {
    return path.reduce((prev, curr) => {
      return isNullOrUndefined(prev[curr]) ? fallback : prev[curr];
    }, object);
  };
};
