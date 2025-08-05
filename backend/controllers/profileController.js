const Profile = require('../models/Profile');

exports.getProfile = async (req, res) => {
  const profile = await Profile.findOne(); // Simplified for single user
  res.json(profile || {});
};

exports.updateProfile = async (req, res) => {
  const { name, bio, wallet } = req.body;
  await Profile.findOneAndUpdate({}, { name, bio, wallet }, { upsert: true });
  res.json({ message: 'Profile Updated' });
};
