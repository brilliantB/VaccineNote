const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true, default: null },
  tags: [{ type: String, default: null }], // 복수개는 배열로
  publishedDate: { type: Date, default: new Date() },
  updateDate: { type: Date, default: null },
  writer: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  // comments: [
  //   {
  //     commentWriter: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  //     commentContent: { type: String, default: null, required: true },
  //     commentDate: { type: Date, default: new Date() },
  //   },
  // ],
});

postSchema.statics.checkAuth = async function (params) {
  const { postId, writerId } = params;
  try {
    const ownResult = await this.findOne({ _id: postId });
    const ownId = ownResult.writer;
    if (ownId.toString() !== writerId.toString()) {
      return -1;
    }
    return 1;
  } catch (error) {
    return -2;
  }
};

module.exports = mongoose.model("post", postSchema);
