const { wrapperAsync } = require("../middlewares/async-wrapper");
const httpStatus = require('http-status');
const { workProfileService, Database } = require("../services");



const getWorkProfile = wrapperAsync(async (req, res) => {

  const id = req.params
  const workprofile = await workProfileService.getWorkProfile(id)

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Work Profile obtained",
    data: workprofile,
  });
});
const getWorkProfiles = wrapperAsync(async (req, res) => {
  res.status(200).json({ success: true, message: "Work Profiles obtained" });

});

// * Create 
const createWorkProfile = wrapperAsync(async (req, res) => {

  // const { work_profile } = req.body
  const {
    user_id,
    gender,
    phone_number,
    city, country,
    education_status,
    english_level,
    cv_url,
    linkendin_url,
    github_url,
    featured_project,
    work_availability,
    dev_experience,
    design_experience,
    data_experience,
    educational_level,
    other_technologies_comment,
    ideal_work_comment,
    relocation_option,
    visa,
    database,
    dev_languages,
    dev_tools,
    educational_experience,
    soft_skills
  } = req.body
  const items = database.map(ele => ele)
  // console.log(items)


  const newWorkProfile = await workProfileService.createWorkProfile({
    user_id,
    country,
    phone_number,
    city,
    cv_url,
    linkendin_url,
    github_url,
    featured_project,
    other_technologies_comment,
    ideal_work_comment,
    educational_level,
    relocation_option,
    dev_experience,
    design_experience,
    data_experience,
    gender,
    english_level,
    work_availability,
    education_status,
    visa,
    database
  })


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
