const { wrapperCommon } = require("../middlewares/async-wrapper");
const { WorkProfile } = require("../models")

const getEducationLevelsEnum = wrapperCommon(async () => {

    const educationLevels = await WorkProfile.getAttributes().educational_level.values
    return educationLevels;
})

const getRelocationOptionsEnum = wrapperCommon(async () => {
    const relocationOption = await WorkProfile.getAttributes().relocation_option.values
    return relocationOption;
})
const getDevExperiencesEnum = wrapperCommon(async () => {
    const devExperience = await WorkProfile.getAttributes().dev_experience.values
    return devExperience;
})
const getDesignExperiencesEnum = wrapperCommon(async () => {
    const designExperience = await WorkProfile.getAttributes().design_experience.values
    return designExperience;
})
const getDataExperiencesEnum = wrapperCommon(async () => {
    const dataExperience = await WorkProfile.getAttributes().data_experience.values
    return dataExperience;
})
const getGendersEnum = wrapperCommon(async () => {
    const gender = await WorkProfile.getAttributes().gender.values
    return gender;
})
const getEnglishLevelsEnum = wrapperCommon(async () => {
    const englishLevel = await WorkProfile.getAttributes().english_level.values
    return englishLevel;
})
const getWorkAvailabilitiesEnum = wrapperCommon(async () => {
    const workAvailability = await WorkProfile.getAttributes().work_availability.values
    return workAvailability;
})
const getEducationStatusesEnum = wrapperCommon(async () => {
    const educationStatus = await WorkProfile.getAttributes().education_status.values
    return educationStatus;
})
const getVisasEnum = wrapperCommon(async () => {
    const visa = await WorkProfile.getAttributes().visa.values
    return visa;
})

module.exports = {
    getEducationLevelsEnum,
    getRelocationOptionsEnum,
    getDevExperiencesEnum,
    getDesignExperiencesEnum,
    getDataExperiencesEnum,
    getGendersEnum,
    getEnglishLevelsEnum,
    getWorkAvailabilitiesEnum,
    getEducationStatusesEnum,
    getVisasEnum
}