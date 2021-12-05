const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
      required: true,
    },
    commentWriter: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    parentCommnet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
    commentContent: { type: String, default: null, required: true },
    commentDate: { type: Date, default: Date.now() },
    isDeleted: { type: Boolean, default: false },
  },
  {
    toObject: { viruals: true },
  }
);

commentSchema
  .virtual("childComments")
  .get(function () {
    return this._childComments;
  })
  .set(function (value) {
    this._childComments = value;
  });

module.exports = mongoose.model("comment", commentSchema);
