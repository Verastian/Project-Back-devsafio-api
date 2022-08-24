const { wrapperAsync } = require("../middlewares/async-wrapper");
const httpStatus = require('http-status');
const { workProfileService, Database } = require("../services");
const workProfileView = require('../views/workProfile.view');


//* one workprofile by User id
const getDataWorkprofileByUser = wrapperAsync(async (req, res) => {
  const { user_id: userId } = req.params;
  const workProfile = await workProfileService.getWorkProfileByIdUser(parseInt(userId))
  if (workProfile) {
    const workProfileJson = workProfileView(workProfile);
    return res.status(httpStatus.OK).json(workProfileJson);
  } else {
    return res.status(httpStatus.NOT_FOUND).json({
      success: false,
      message: 'Not Found',
      data: ''
    });
  }

});

const getWorkProfiles = wrapperAsync(async (req, res) => {
  res.status(200).json({ success: true, message: "Work Profiles obtained" });

});

// * Create
const createWorkProfile = wrapperAsync(async (req, res) => {
  // userSession object is verified, therefore we know this is safe
  const userSessionId = req.userSession.id;

  const { work_profile } = req.body;

  // Assign id to the workProfile object
  work_profile.id = userSessionId;

  const newWorkProfile = await workProfileService.createWorkProfile(work_profile)
  console.log('KKCK', newWorkProfile);

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
