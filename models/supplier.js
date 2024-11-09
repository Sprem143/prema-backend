const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
 name: {
    type: String,
    required: true,
  },
  mobile:{
    type:Number,
    required:true,
    unique:true
  },
  address:String,
  password: {
    type: String,
    required: true
  },
  imgUrl:String
});

UserSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('Supplier', UserSchema);
