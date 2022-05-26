const getWorkProfile = (req, res) => {
  res.status(200).json({ success: true, message: "Work Profile obtained" });
};
const getWorkProfiles = (req, res) => {
  res.status(200).json({ success: true, message: "Work Profiles obtained" });
};
const saveWorkProfile = (req, res) => {
  res.status(200).json({ success: true, message: "Work Profile saved" });
};
const updateWorkProfile = (req, res) => {
  res.status(200).json({ success: true, message: "Work Profile updated" });
};
const deleteWorkProfile = (req, res) => {
  res.status(200).json({ success: true, message: "Work Profile deleted" });
};

module.exports = {
  getWorkProfile,
  getWorkProfiles,
  saveWorkProfile,
  updateWorkProfile,
  deleteWorkProfile,
};
