const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    link: { type: String, required: true },
    source: { type: String, required: true },
    description: { type: String, required: true },
    datePosted: { type: Date, required: true },
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    remote:{type:Boolean,required:true},
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
