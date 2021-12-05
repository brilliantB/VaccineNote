import React from "react";
import WriteButton from "../components/write/WriteButton";
import WriteButton2 from "../components/write/WriteButton2";
import PostsListContainer from "../containers/posts/PostsListContainer";
import VaccineStatContainer from "../containers/publickapi/VaccineStatContainer";

function HomePage() {
  return (
    <div>
      {/* 컴포넌트는 대문자 */}
      <VaccineStatContainer />

      <PostsListContainer />
      <WriteButton />
      <WriteButton2 />
    </div>
  );
}

export default HomePage;
