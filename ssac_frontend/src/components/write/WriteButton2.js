import React from "react";
import styled from "styled-components";
import ButtonComponent from "../common/ButtonComponent";
import palette from "../../libs/styles/palette";
import { BsPlusLg } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import PostContext from "../../context/PostContext";

const StyledButton = styled(ButtonComponent)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${palette.cyan[9]};
  position: fixed;
  bottom: 8rem;
  right: 2rem;

  &:hover {
    background-color: ${palette.cyan[8]};
  }
`;

const StyledIcon = styled(BsPlusLg)`
  font-size: 2rem;
  vertical-align: bottom;
`;

function WriteButton2() {
  const history = useHistory();
  const { authInfo } = useContext(AuthContext);
  const { postInfo, setPostInfo } = useContext(PostContext);
  return (
    <>
      {authInfo.isLoggedIn ? (
        <StyledButton
          onClick={() => {
            setPostInfo({
              ...postInfo,
              originalPostId: "61664b49008208a285398a9f",
            });
            history.push("/write");
          }}
        >
          <StyledIcon />
        </StyledButton>
      ) : (
        <></>
      )}
    </>
  );
}

export default WriteButton2;
