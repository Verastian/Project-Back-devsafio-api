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


const getEducationalLevels = wrapperAsync(async (req, res) => {
  const educationalLevels = await workProfileService.getEducationLevelEnum()

  res.status(httpStatus.OK).json({
    success: true,
    message: "succesfull",
    data: { educational_levels: educationalLevels },
  });
})
const getRelocationOptions = wrapperAsync(async (req, res) => {
  const relocationOption = await workProfileService.getRelocationOptionsEnum()

  res.status(httpStatus.OK).json({
    success: true,
    message: "succesfull",
    data: { relocation_option: relocationOption },
  });
})
const getDevExperiences = wrapperAsync(async (req, res) => {
  const devExperience = await workProfileService.getDevExperiencesEnum()

  res.status(httpStatus.OK).json({
    success: true,
    message: "succesfull",
    data: { dev_experience: devExperience },
  });
})
const getDesignExperiences = wrapperAsync(async (req, res) => {
  const designExperience = await workProfileService.getDesignExperiencesEnum()

  res.status(httpStatus.OK).json({
    success: true,
    message: "succesfull",
    data: { design_experience: designExperience },
  });
})
const getDataExperiences = wrapperAsync(async (req, res) => {
  const dataExperience = await workProfileService.getDataExperiencesEnum()

  res.status(httpStatus.OK).json({
    success: true,
    message: "succesfull",
    data: { data_experience: dataExperience },
  });
})
const getGenders = wrapperAsync(async (req, res) => {
  const genderList = await workProfileService.getGendersEnum()

  res.status(httpStatus.OK).json({
    success: true,
    message: "succesfull",
    data: { gender: genderList },
  });
})
const getEnglishLevels = wrapperAsync(async (req, res) => {
  const englishLevel = await workProfileService.getEnglishLevelsEnum()

  res.status(httpStatus.OK).json({
    success: true,
    message: "succesfull",
    data: { english_level: englishLevel },
  });
})
const getWorkAvailabilities = wrapperAsync(async (req, res) => {
  const workAvailability = await workProfileService.getWorkAvailabilitiesEnum()

  res.status(httpStatus.OK).json({
    success: true,
    message: "succesfull",
    data: { work_availability: workAvailability },
  });
})
const getEducationStatuses = wrapperAsync(async (req, res) => {
  const educationStatus = await workProfileService.getEducationStatusesEnum()

  res.status(httpStatus.OK).json({
    success: true,
    message: "succesfull",
    data: { education_status: educationStatus },
  });
})
const getVisas = wrapperAsync(async (req, res) => {
  const visaList = await workProfileService.getVisasEnum()

  res.status(httpStatus.OK).json({
    success: true,
    message: "succesfull",
    data: { visa: visaList },
  });
})

module.exports = {
  getWorkProfile,
  createWorkProfile,
  getWorkProfiles,
  saveWorkProfile,
  updateWorkProfile,
  deleteWorkProfile,

  getEducationalLevels,
  getRelocationOptions,
  getDevExperiences,
  getDesignExperiences,
  getDataExperiences,
  getGenders,
  getEnglishLevels,
  getWorkAvailabilities,
  getEducationStatuses,
  getVisas
};
