const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    //To avoid depreciation warnings
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true,
  });
};

module.exports = connectDB