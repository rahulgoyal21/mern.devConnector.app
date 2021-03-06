const { Mongoose } = require('mongoose');

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log('MongoDB connected....');
  } catch (err) {
    console.log(err.response);

    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
