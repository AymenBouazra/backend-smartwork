const mongoose = require('mongoose');

const connectDB = async () => {
 try {
  await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/smart-work");
  console.log('✅ MongoDB Connected');
 } catch (err) {
  console.log('❌ MongoDB Connection Failed', err.message);
  process.exit(1); // Exit process with failure
 }
};

module.exports = connectDB;