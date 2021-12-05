import React from "react";
import styled from "styled-components";
import ButtonComponent from "../common/ButtonComponent";
import palette from "../../libs/styles/palette";
import { BsPlusLg } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const StyledButton = styled(ButtonComponent)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${palette.blue[3]};
  position: fixed;
  bottom: 2rem;
  right: 2rem;

  &:hover {
    background-color: ${palette.blue[2]};
  }
`;

const StyledIcon = styled(BsPlusLg)`
  font-size: 2rem;
  vertical-align: bottom;
`;

function WriteButton() {
  const history = useHistory();
  const { authInfo } = useContext(AuthContext);

  return (
    <>
      {authInfo.isLoggedIn ? (
        <StyledButton onClick={() => history.push("/write")}>
          <StyledIcon />
        </StyledButton>
      ) : (
        <></>
      )}
    </>
  );
}

export default WriteButton;
