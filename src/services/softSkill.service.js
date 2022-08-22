const { wrapperCommon } = require("../middlewares/async-wrapper");
const { SoftSkill } = require("../models");

const getSoftSkills = wrapperCommon(async () => {
    return await SoftSkill.findAll();
});
const getSoftSkillById = wrapperCommon(async (id) => {
    const softSkillound = await SoftSkill.findOne({
        where: id,
    });
    return softSkillound
});

module.exports = {
    getSoftSkills,
    getSoftSkillById,
};
