import React, { useContext, useEffect } from "react";
import PostsList from "../../components/posts/PostsList";
import PostsContext from "../../context/PostsContext";
import client from "../../libs/api/_client";
import { useHistory } from "react-router-dom";

function PostsListContainer() {
  const { postsInfo, setPostsInfo } = useContext(PostsContext);
  const history = useHistory();

  useEffect(() => {
    async function getData() {
      try {
        const response = await client.get("vaccine/post");

        if (response.status === 200) {
          const result = response.data.data;
          console.log(result);
          setPostsInfo({
            posts: result,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }

    getData();
    // setLoading(false); 여기다하니까 안되네
  }, []);

  const onClickPost = (postId) => {
    history.push(`/post/${postId}`);
  };
  return <PostsList posts={postsInfo.posts} onClickPost={onClickPost} />;
}

export default PostsListContainer;
