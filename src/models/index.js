// const associations = require("./associations");
const User = require("./User");
const WorkProfile = require("./WorkProfile");
const WorkProfileRole = require("./WorkProfileRole");
const UserStatus = require("./UserStatus");
const Role = require("./Role");
/*
 *
 *this file manages the associations between the models
 */

/*
 *one-to-one relationship between "users" and "work profile" models
 *where a user has a work profile
 */
User.hasOne(WorkProfile, { as: "workprofiles", foreignKey: "user_id" });

WorkProfile.belongsTo(User, { as: "users", foreignKey: "user_id" });

/*
/*
 *one-to-many relationship between "Users" and "UserStatus" models
 *where a profile status belongs to many users
 */
UserStatus.hasMany(User, { foreignKey: "status_id" });

User.belongsTo(UserStatus, { foreignKey: "status_id" });

/*
/*
 *one-to-many relationship between "Workprofile" and "WorkprofileRole" models
 *where a work profile belongs to many work profile roles
 */
WorkProfile.hasMany(WorkProfileRole, { foreignKey: "workprofile_id" });

WorkProfileRole.belongsTo(WorkProfile, { foreignKey: "workprofile_id" });

/*
/*
 *one-to-many relationship between "Role" and "WorkProfileRole" models
 *where a role belongs to many work profile roles
 */
Role.hasMany(WorkProfileRole, { foreignKey: "role_id" });

WorkProfileRole.belongsTo(Role, { foreignKey: "role_id" });

/*
/*
 *other relationship
 */

// *Add all models
module.exports = { User, WorkProfile, Role, WorkProfileRole, UserStatus };
