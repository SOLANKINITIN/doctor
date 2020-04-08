const { User } = require("Models");
const { handleError } = require("Helper");
var bcrypt = require("bcryptjs");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json({
      success: true,
      data: users
    });
  } catch (err) {
    handleError(err);
    res.status(404);
    return res.json({
      success: false,
      error: err
    });
  }
};

const deleteUserById = async (req, res, next) => {
  try {
    const userId = req.params.id;
    await User.findOneAndDelete({ _id: userId });
    res.json({
      success: true,
      data: "User deleted successfully"
    });
  } catch (err) {
    handleError(err);
    res.status(404);
    return res.json({
      success: false,
      error: err
    });
  }
};

const changeUserPassword = async (req, res, next) => {
  try {
    const userId = req.body.userId;
    const newPassword = req.body.newPassword;
    const oldPassword = req.body.oldPassword;
    const user = await User.findOne({ _id: userId });

    if (!user) {
      return res.json({
        success: false,
        data: "User not found"
      });
    }

    const isPasswordMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isPasswordMatch) {
      return res.json({
        success: false,
        data: "Please enter valid current password"
      });
    }

    var salt = bcrypt.genSaltSync(10);
    var encryptedPassword = bcrypt.hashSync(newPassword, salt);

    await User.findOneAndUpdate(
      { _id: userId },
      { $set: { password: encryptedPassword } }
    );
    res.json({
      success: true,
      data: "Password change successfully"
    });
  } catch (err) {
    handleError(err);
    res.status(404);
    return res.json({
      success: false,
      error: err
    });
  }
};

const changeAdminStatus = async (req, res, next) => {
  try {
    const userId = req.body.userId;
    const isAdmin = req.body.isAdmin;
    await User.findOneAndUpdate(
      { _id: userId },
      { $set: { isAdmin: Boolean(isAdmin) } }
    );
    res.json({
      success: true,
      data: "User admin status updated successfully"
    });
  } catch (err) {
    handleError(err);
    res.status(404);
    return res.json({
      success: false,
      error: err
    });
  }
};

module.exports = {
  getUsers,
  deleteUserById,
  changeUserPassword,
  changeAdminStatus
};
