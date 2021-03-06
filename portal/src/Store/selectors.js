const selectState = state => {
  return state.root;
};

export const selectHospital = state => {
  return selectState(state).hospitals;
};
export const selectHospitalDetail = state => {
  return selectState(state).hospitalDetail;
};
export const selectCurrentPatient = state => {
  return selectState(state).currentPatient;
};
export const selectCurrentCategory = state => {
  return selectState(state).currentCategory;
};
export const selectCategories = state => {
  return selectState(state).categoryListing;
};
export const currentOrder = state => {
  return selectState(state).currentOrder;
};
export const selectOrderByType = state => {
  return selectState(state).userOrder;
};
export const mail = state => {
  return selectState(state).mail;
};
export const userLoad = state => {
  return selectState(state).loadUser;
};
export const selectMessageBox = state => {
  return selectState(state).messageBox;
};
export const selectUsers = state => {
  return selectState(state).users;
};
export const selectAnalytics = state => {
  return selectState(state).analytics;
};
