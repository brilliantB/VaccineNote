import React from "react";
import WriteDropDown from "../../components/write/WriteDropDown";
import { useContext } from "react";
import PostContext from "../../context/PostContext";

function WriteDropDownContainer() {
  const options = ["후기", "팁", "등등"];
  const { postInfo, setPostInfo } = useContext(PostContext);
  const category = postInfo.category;

  const onChangeDropdown = (payload) => {
    setPostInfo({
      ...postInfo,
      category: payload,
    });
  };
  return (
    <WriteDropDown
      onChangeDropdown={onChangeDropdown}
      options={options}
      defaultOption={category}
    />
  );
}

export default WriteDropDownContainer;
