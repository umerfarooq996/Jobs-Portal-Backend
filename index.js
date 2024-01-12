var cors = require('cors')  //use this
const express = require('express');
const dotenv = require('dotenv');

const dbConnect=require("./config/db")
const main = require('./routes/main');
const PORT = process.env.PORT || 3000;

const addDummyJobs=require('./utils/dummy');

dotenv.config();
dbConnect()

const app = express();
app.use(cors())

app.use('/api', main);


app.get('/',(req,res)=>{
	addDummyJobs()
	res.status(200).json("Jobs Portal")
})


app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
