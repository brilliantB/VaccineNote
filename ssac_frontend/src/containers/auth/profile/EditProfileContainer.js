import React from "react";
import { useState } from "react";
import { useContext } from "react";
import ProfileContext from "../../../context/ProfileContext";
import EditProfile from "../../../components/auth/profile/EditProfile";

function EditProfileContainer() {
  const [profileImg, setProfileImg] = useState({
    imgBase64: "",
    imgFile: null,
    imgURL: "",
  });

  const { profileInfo, setProfileInfo } = useContext(ProfileContext);

  const onClickAvatar = (e) => {
    const imageFile = e.target.files[0];
    const imgBase64 = URL.createObjectURL(imageFile);
    setProfileImg({
      ...profileImg,
      imgBase64: imgBase64,
      imgFile: imageFile,
    });
  };
  const onChangeInput = (e) => {
    setProfileInfo({
      ...profileInfo,
      age: e.target.value,
    });
    console.log(e.target.value);
  };

  const onChangeDropdown = (payload) => {
    const { key, value } = payload;
    setProfileInfo({
      ...profileInfo,
      [key]: value,
    });
    console.log(payload);
  };

  const onChangeCalender = (date) => {
    setProfileInfo({
      ...profileInfo,
      inoDate: date,
    });
    console.log(date);
  };

  return (
    <EditProfile
      onChangeInput={onChangeInput}
      onChangeDropdown={onChangeDropdown}
      profileImg={profileImg}
      onClickAvatar={onClickAvatar}
      onChangeCalender={onChangeCalender}
      profileInfo={profileInfo}
    />
  );
}

export default EditProfileContainer;
