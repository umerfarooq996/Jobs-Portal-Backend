const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      process.env.DB,
    );
    console.log(`DB connected successFully`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnect;