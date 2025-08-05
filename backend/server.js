const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
let profileData = { name: 'John Doe', bio: 'Developer', wallet: '0x123...' };
app.get('/api/profile', (req, res) => res.status(200).json(profileData));
app.post('/api/profile/update', (req, res) => {
  const { name, bio, wallet } = req.body;
  profileData = { name, bio, wallet };
  res.status(200).json({ message: 'Profile Updated Successfully', profileData });
});
const PORT = 4000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
