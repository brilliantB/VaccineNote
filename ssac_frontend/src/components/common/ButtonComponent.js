import React from "react";
import styled, { css } from "styled-components";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import palette from "../../libs/styles/palette";

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[6]};
  &:hover {
    background: ${palette.gray[4]};
  }
  &:disabled {
    background: ${palette.gray[3]};
    color: ${palette.gray[5]};
    cursor: not-allowed;
  }
  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 1rem;
      padding-bottom: 1rem;
      width: 100%;
      font-size: 1.8rem;
    `}
  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.blue[3]};
      &:hover {
        background: ${palette.blue[2]};
      }
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const ButtonComponent = (props) => {
  return props.to ? (
    <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};

export default withRouter(ButtonComponent);
