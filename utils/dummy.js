const Job=require("../models/jobs");
const mongoose = require("mongoose");
const addDummyJobs = async () => {
    try {
      const dummyJobs = [];
  
      const technologies = ['React', 'Python', 'Node.js', 'Angular', 'Vue.js', 'Java', 'Ruby', 'C#', 'PHP', 'Swift'];
  
      for (let i = 0; i < 20; i++) {
        const randomTech1 = technologies[Math.floor(Math.random() * technologies.length)];
        const randomTech2 = technologies[Math.floor(Math.random() * technologies.length)];
        const jobTitle = `Full Stack Developer - ${randomTech1} & ${randomTech2}`;
        
        const dummyJob = {
          link: `https://example.com/job${i}`,
          source: 'Tech Jobs Board',
          description: `We are looking for a skilled Full Stack Developer proficient in ${randomTech1} and ${randomTech2}.`,
          datePosted: new Date(),
          title: jobTitle,
          company: `Tech Solutions ${i}`,
          location: `City ${i}`,
          remote: i % 2 === 0, // Alternate between true and false for the 'remote' field
        };
  
        dummyJobs.push(dummyJob);
      }
  
      await Job.insertMany(dummyJobs);
      console.log('Dummy jobs added successfully');
    } catch (error) {
      console.error('Error adding dummy jobs:', error);
    } finally {
      // Disconnect from MongoDB after adding jobs
      mongoose.disconnect();
    }
  };

  module.exports=addDummyJobs
