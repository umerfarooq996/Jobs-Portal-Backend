const Job = require('../models/jobs');

const MAX_JOBS_PER_PAGE = 100;

const getJobs = async (req, res) => {
  let { title, where, remote, page, limit } = req.query
  limit = Math.min(limit, MAX_JOBS_PER_PAGE);
  const skip = page * limit;
  try {
    const allJobs = await Job.find({
      title: new RegExp(title, "i"),
      location: new RegExp(where, "i"),
    });

    const jobs = allJobs.slice(skip, skip + limit);
    res.json({ jobs, totalCount: allJobs.length });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


module.exports = {
  getJobs,
}
