import React from "react";
import { withRouter } from "react-router-dom";
import { useContext } from "react";
import ProfileContext from "../../../context/ProfileContext";
import EditActionButtons from "../../../components/auth/profile/EditActionButtons";
import client from "../../../libs/api/_client";
import { ToastsStore } from "react-toasts";

function EditActionButtonContainer({ history }) {
  const { resetProfile, profileInfo, setProfileInfo } =
    useContext(ProfileContext);
  const onCancel = () => {
    history.goBack();
  };

  const onEdit = async (e) => {
    e.preventDefault();

    try {
      const response = await client.put("vaccine/auth/update", {
        age: profileInfo.age,
        type: profileInfo.type,
        gender: profileInfo.gender,
        inoDate: profileInfo.inoDate,
        degree: profileInfo.degree,
        profileImage: profileInfo.imgURL,
      });
      if (response.status === 200) {
        ToastsStore.success("회원정보 수정 완료");
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(profileInfo);
    resetProfile();
  };
  return <EditActionButtons onCancel={onCancel} onEdit={onEdit} />;
}

export default withRouter(EditActionButtonContainer);
