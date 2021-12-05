import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { withRouter } from "react-router-dom";
import WriteActionButtons from "../../components/write/WriteActionButtons";
import PostContext from "../../context/PostContext";
import client from "../../libs/api/_client";
import { ToastsStore } from "react-toasts";

const WriteActionButtonsContainer = ({ history }) => {
  const { resetPost, postInfo, setPostInfo } = useContext(PostContext);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const { originalPostId } = postInfo;
    if (originalPostId) {
      // 수정상태
      setIsEdit(true);
      async function getData() {
        try {
          console.log(postInfo.originalPostId);
          const response = await client.get(
            `vaccine/post/${postInfo.originalPostId}`
          );
          console.log(response);
          const result = response.data.data;
          const { title, content, tags, category } = result;
          setPostInfo({
            ...postInfo,
            title: title,
            body: content,
            tags: tags,
            category: category,
          });
          resetPost();
          setIsEdit(false);
        } catch (error) {}
      }
      getData();
    } else {
      // 등록상태
      setIsEdit(false);
    }
  }, []);

  const onPublish = async (e) => {
    e.preventDefault();
    const { originalPostId } = postInfo;
    if (originalPostId) {
      // 수정 상황
      try {
        const response = await client.put(
          `vaccine/post/update/${postInfo.originalPostId}`,
          {
            title: postInfo.title,
            content: postInfo.body,
          }
        );
        if (response.status === 200) {
          ToastsStore.success("수정 완료");
          resetPost();
          history.push("/");
        }
      } catch (error) {
        console.log(error);
      }
      console.log(postInfo);
    } else {
      try {
        const response = await client.post("vaccine/post/upload", {
          title: postInfo.title,
          content: postInfo.body,
          category: postInfo.category.value,
          tags: postInfo.tags,
        });
        if (response.status === 200) {
          ToastsStore.success("게시글 등록 완료");
          resetPost();
          history.push("/");
        }
      } catch (error) {
        console.log(error);
      }
      console.log(postInfo);
    }
  };
  const onCancel = () => {
    history.goBack();
  };

  return (
    <WriteActionButtons
      isEdit={isEdit}
      onPublish={onPublish}
      onCancel={onCancel}
    />
  );
};

export default withRouter(WriteActionButtonsContainer);
