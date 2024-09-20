import User from "../models/user.model.js";

export const getUsersSideMenu = async (req, res) => {
  try {
    const loggedInUserID = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserID },
    }).select("-password");
    //const allUsers = await User.find()

    return res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUsersSideMenu", error?.message);
    return res
      .status(500)
      .json({ error: error, message: "Internal Server Error" });
  }
};
