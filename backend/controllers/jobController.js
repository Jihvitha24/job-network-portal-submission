const Job = require('../models/Job');

exports.getJobs = async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
};

exports.postJob = async (req, res) => {
  const { title, description, skills, budget } = req.body;
  const newJob = new Job({ title, description, skills, budget });
  await newJob.save();
  res.json({ message: 'Job posted successfully!' });
};
