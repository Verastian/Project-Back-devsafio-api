const { wrapperAsync } = require("../middlewares/async-wrapper");
const httpStatus = require('http-status');
const { workProfileService } = require("../services");

const getWorkProfile = wrapperAsync(async (req, res) => {
  res.status(200).json({ success: true, message: "Work Profile obtained" });
});
const getWorkProfiles = wrapperAsync(async (req, res) => {
  res.status(200).json({ success: true, message: "Work Profiles obtained" });

});
const createWorkProfile = wrapperAsync(async (req, res) => {

  res.status(httpStatus.CREATED).json({
    success: true,
    message: "Created successfully",
    data: req.body
  });
});
const saveWorkProfile = wrapperAsync(async (req, res) => {
  res.status(200).json({ success: true, message: "Work Profile saved" });
});
const updateWorkProfile = wrapperAsync(async (req, res) => {
  res.status(200).json({ success: true, message: "Work Profile updated" });
});
const deleteWorkProfile = wrapperAsync(async (req, res) => {
  res.status(200).json({ success: true, message: "Work Profile deleted" });
});


const getDataWorkprofile = wrapperAsync(async (req, res) => {
  const getDataWorkprofile = await workProfileService.getDataWorkprofile()

  res.status(httpStatus.OK).json({
    success: true,
    message: "succesfull",
    data: { data_workprofile: getDataWorkprofile },
  });
})


module.exports = {
  getWorkProfile,
  createWorkProfile,
  getWorkProfiles,
  saveWorkProfile,
  updateWorkProfile,
  deleteWorkProfile,

  getDataWorkprofile
};
