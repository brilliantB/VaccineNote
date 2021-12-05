const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  nickName: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  type: { type: String, default: null },
  gender: { type: String, enum: ["male", "female"], default: "male" },
  // `null` is not a valid enum value for path `gender`.
  age: { type: Number, default: null },
  degree: { type: Number, default: null },
  inoDate: { type: Date, default: null },
  verified: { type: Boolean, default: false },
  profileImage: { type: String, default: null },
});

userSchema.statics.checkAuth = async function (params) {
  const { logginId } = params;
  try {
    const ownResult = await this.findOne({ _id: logginId });
    const ownId = ownResult._id;

    if (ownId.toString() == logginId.toString()) {
      return 1;
    }
    return -1;
  } catch (error) {
    return -2;
  }
};

module.exports = mongoose.model("user", userSchema);
