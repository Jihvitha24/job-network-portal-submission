const express = require('express');
const router = express.Router();

// Dummy Profile Data
let profileData = {
  name: 'John Doe',
  bio: 'Developer',
  wallet: '0x1234567890abcdef1234567890abcdef12345678'
};

// GET /api/profile — Fetch Profile
router.get('/', (req, res) => {
  res.status(200).json(profileData);
});

// POST /api/profile/update — Update Profile
router.post('/update', (req, res) => {
  console.log('Incoming Profile Update:', req.body);  // Debug log

  const { name, bio, wallet } = req.body;

  if (!name || !bio) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  profileData = { name, bio, wallet };
  return res.status(200).json({ message: 'Profile Updated Successfully', profileData });
});

module.exports = router;
