const { wrapperAsync } = require("../middlewares/async-wrapper");
const httpStatus = require('http-status');
const { workProfileService } = require("../services");
const workProfileView = require('../views/workProfile.view');


const getDataWorkprofileByUser = wrapperAsync(async (req, res) => {
  const userId = req.params
  const workProfile = await workProfileService.getWorkProfileByIdUser(userId)
  const response = workProfileView(workProfile);

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Work Profile obtained",
    data: response,
  });
});
const getWorkProfiles = wrapperAsync(async (req, res) => {
  res.status(200).json({ success: true, message: "Work Profiles obtained" });

});

const createWorkProfile = wrapperAsync(async (req, res) => {

  const { work_profile } = req.body

  const newWorkProfile = await workProfileService.createWorkProfile(work_profile)

  if (!newWorkProfile) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "work profile cannot be created",
      data: "",
    });
  }
  res.status(httpStatus.CREATED).json({
    success: true,
    message: "Created successfully",
    data: ""
  });
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
  getDataWorkprofileByUser,
  createWorkProfile,
  getWorkProfiles,
  updateWorkProfile,
  deleteWorkProfile,
  getDataWorkprofile
};
