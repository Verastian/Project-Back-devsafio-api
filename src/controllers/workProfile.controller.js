const { wrapperAsync } = require("../middlewares/async-wrapper");
const httpStatus = require('http-status');

const getWorkProfile = wrapperAsync(async (req, res) => {
  res.status(200).json({ success: true, message: "Work Profile obtained" });
});
const createWorkProfile = wrapperAsync(async (req, res) => {
  res.status(httpStatus.CREATED).json({
    success: true,
    message: "Created successfully",
    data: req.body
  });
});
const getWorkProfiles = wrapperAsync(async (req, res) => {
  res.status(200).json({ success: true, message: "Work Profiles obtained" });
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

module.exports = {
  getWorkProfile,
  createWorkProfile,
  getWorkProfiles,
  saveWorkProfile,
  updateWorkProfile,
  deleteWorkProfile,
};
