// const associations = require("./associations");
const User = require("./User");
const Workprofile = require("./WorkProfile");

/*
 *
 *this file manages the associations between the models
 */

/*
 *one-to-one relationship between "users" and "work profile" models
 *where a user has a work profile
 */
User.hasOne(Workprofile, { as: "workprofiles", foreignKey: "user_id" });

Workprofile.belongsTo(User, { as: "users", foreignKey: "user_id" });

/*
 *other relationship
 */

// *Add all models
module.exports = { User, Workprofile };
