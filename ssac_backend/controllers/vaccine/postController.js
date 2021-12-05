const post = require("../../models/post");

const postController = {
  uploadPost: async (req, res) => {
    const userInfo = req.userInfo;

    const { title, content, tags, category } = req.body;

    const postModel = new post({
      title,
      content,
      tags,
      category,
      writer: userInfo._id,
    });

    try {
      const result = await postModel.save();
      return res.status(200).json({
        message: "저장 성공",
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },

  deletePost: async (req, res) => {
    const userInfo = req.userInfo;
    console.log(userInfo);
    const { id } = req.params; // 게시물의 _id

    // 일치하는 회원인지 아닌지 확인
    const ownResult = await post.checkAuth({
      postId: id,
      writerId: userInfo._id,
    });

    if (ownResult === -1) {
      return res.status(409).json({
        message: "접근 권한이 없습니다",
      });
    } else if (ownResult === -2) {
      return res.status(500).json({
        message: "DB 서버 에러",
      });
    }

    try {
      await post.findOneAndDelete({ _id: id });
      return res.json({
        message: "삭제 완료",
      });
    } catch (error) {
      return res.status(500).json({
        message: "DB 서버 에러",
        error: error,
      });
    }
  },

  updatePost: async (req, res) => {
    const userInfo = req.userInfo;

    const { id } = req.params;
    const { title, content } = req.body;

    const ownResult = await post.checkAuth({
      postId: id,
      writerId: userInfo._id,
    });

    if (ownResult === -1) {
      return res.status(409).json({
        message: "접근 권한이 없습니다",
      });
    } else if (ownResult === -2) {
      return res.status(500).json({
        message: "DB 서버 에러",
      });
    }

    try {
      const result = await post.findByIdAndUpdate(
        id,
        { title, content, updateDate: new Date() },
        { new: true } // update 적용 후 데이터 반환
      );
      return res.status(200).json({
        message: "수정 완료",
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        message: "수정 실패",
        error: error,
      });
    }
  },

  getAllDate: async (req, res) => {
    try {
      const result = await post
        .find()
        .populate("writer", "nickName email type age degree gender");
      // populate로 writer를 찾아서 치환, 뒤에 받고싶은 필드값
      res.json({
        message: "조회 성공",
        data: result,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "조회 실패",
        error: error,
      });
    }
  },

  detailPost: async (req, res) => {
    const { id } = req.params;

    try {
      const result = await post
        .findOne({ _id: id })
        .populate("writer", "nickName email type age degree gender");
      res.json({
        message: "상세조회 성공",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "상세조회 실패",
        error: error,
      });
    }
  },
};

module.exports = postController;
