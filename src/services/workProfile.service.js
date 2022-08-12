const { wrapperCommon } = require("../middlewares/async-wrapper");
const { WorkProfile } = require("../models")




const getDataWorkprofile = wrapperCommon(() => {
    const educationLevels = WorkProfile.getAttributes().educational_level.values
    const relocationOptions = WorkProfile.getAttributes().relocation_option.values
    const devExperiences = WorkProfile.getAttributes().dev_experience.values
    const designExperiences = WorkProfile.getAttributes().design_experience.values
    const dataExperiences = WorkProfile.getAttributes().data_experience.values
    const genders = WorkProfile.getAttributes().gender.values
    const englishLevels = WorkProfile.getAttributes().english_level.values
    const workAvailabilities = WorkProfile.getAttributes().work_availability.values
    const educationStatuses = WorkProfile.getAttributes().education_status.values
    const visa = WorkProfile.getAttributes().visa.values

    return {
        educationLevels,
        relocationOptions,
        devExperiences,
        designExperiences,
        dataExperiences,
        genders,
        englishLevels,
        workAvailabilities,
        educationStatuses,
        visa
    };
})


module.exports = {
    getDataWorkprofile,
}