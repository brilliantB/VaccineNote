import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Editor from "../../components/write/Editor";
import PostContext from "../../context/PostContext";
import client from "../../libs/api/_client";

function EditorContainer() {
  const { postInfo, setPostInfo } = useContext(PostContext);
  const { title, body } = postInfo;
  console.log(postInfo);

  const onChangeField = (payload) => {
    const { key, value } = payload;
    setPostInfo({
      ...postInfo,
      [key]: value,
    });
    console.log(payload);
  };

  return (
    <Editor
      postInfo={postInfo}
      title={title}
      body={body}
      onChangeField={onChangeField}
    />
  );
}

export default EditorContainer;
