const Role = require("./Role");
const User = require("./User");
const Tool = require("./Tool");
const Database = require("./Database");
const SoftSkill = require("./SoftSkill");
const UserStatus = require("./UserStatus");
const DevLanguage = require("./DevLanguage");
const EducationExperience = require("./EducationExperience");
const WorkProfile = require("./WorkProfile");
const WorkProfileTool = require("./WorkProfileTool");
const WorkProfileRole = require("./WorkProfileRole");
const WorkProfileDatabase = require('./WorkProfileDatabase');
const WorkProfileSoftSkill = require("./WorkProfileSoftSkill");
const WorkProfileDevLanguage = require('./WorkProfileDevLanguage');
const WorkProfileEducationExperience = require("./WorkProfileEducationExperience");

// User relations
User.hasOne(WorkProfile, { foreignKey: "user_id" });
User.belongsTo(UserStatus, { foreignKey: 'status_id' });

// UserStatus relations
UserStatus.hasMany(User, { foreignKey: "status_id" });

// WorkProfile relations
WorkProfile.belongsTo(User, { foreignKey: "user_id" });
WorkProfile.belongsToMany(EducationExperience, {
  through: WorkProfileEducationExperience
});
WorkProfile.belongsToMany(DevLanguage, {
  through: WorkProfileDevLanguage
});
WorkProfile.belongsToMany(SoftSkill, {
  through: WorkProfileSoftSkill
});
WorkProfile.belongsToMany(Tool, {
  through: WorkProfileTool
});
WorkProfile.belongsToMany(Role, {
  through: WorkProfileRole
});
WorkProfile.belongsToMany(Database, {
  through: WorkProfileDatabase
});

// EducationExperience relations
EducationExperience.belongsToMany(WorkProfile, {
  through: WorkProfileEducationExperience
});

// DevLanguage relations
DevLanguage.belongsToMany(WorkProfile, {
  through: WorkProfileDevLanguage
});

// SoftSkill relations
SoftSkill.belongsToMany(WorkProfile, {
  through: WorkProfileSoftSkill
});

// Tool relations
Tool.belongsToMany(WorkProfile, {
  through: WorkProfileTool
});

// Role relations
Role.belongsToMany(WorkProfile, {
  through: WorkProfileRole
});

// Database relations
Database.belongsToMany(WorkProfile, {
  through: WorkProfileDatabase
});

module.exports = {
  Role,
  User,
  Tool,
  Database,
  SoftSkill,
  UserStatus,
  DevLanguage,
  EducationExperience,
  WorkProfile,
  WorkProfileTool,
  WorkProfileRole,
  WorkProfileDatabase,
  WorkProfileSoftSkill,
  WorkProfileDevLanguage,
  WorkProfileEducationExperience
};
