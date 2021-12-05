import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
import { Link } from "react-router-dom";
import MainLogo from "../../assets/global/logo.png";
import MiniLogo from "../../assets/global/mini_logo.png";
import ButtonComponent from "./ButtonComponent";
import SearchBox from "./search/SearchBox";
import ProfileAvatar from "../../assets/global/profile.png";
import { useState } from "react";
import palette from "../../libs/styles/palette";

const NavbarWrap = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 1;
  height: 5.7rem;
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .left {
    display: flex;
    align-items: center;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const StyledLogo = styled.img`
  height: 50px;
  padding-top: 20px;
`;

const StyledMiniLogo = styled.img`
  height: 50px;
  padding-top: 20px;
  display: none;
`;

const Spacer = styled.div`
  height: 4rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${palette.gray[6]};
  font-size: 1.7rem;
  padding-top: 1.8rem;
  cursor: pointer;
  & + & {
    margin-left: 0.8rem;
  }
`;

const ProfileText = styled.div`
  text-decoration: none;
  color: ${palette.gray[6]};
  font-size: 1.6rem;
  margin-top: 17px;
`;

const ProfileWrap = styled.div`
  position: relative;
`;

const ProfileImageWrap = styled.div`
  width: 2.3rem;
  height: 2.3rem;
  margin-left: 1rem;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  height: 100%;
  min-width: 100%;
  left: 50%;
  position: relative;
  border-radius: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
`;

const ProfileBoard = styled.div`
  position: absolute;
  right: -1rem;
  bottom: -10rem;
  background-color: ${palette.blue[3]};
  width: 12rem;
  border: 1px solid rgba(0, 0, 0, 0);
  box-shadow: 4px 2px 4px rgba(0, 0, 0, 0);
  border-radius: 6px;

  &::after {
    border-top: 0px solid transparent;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 15px solid ${palette.blue[3]};
    content: "";
    position: absolute;
    top: -13px;
    left: 88px;
  }
`;

const ProfileItem = styled.div`
  padding: 1rem;
  font-size: 1.3rem;
  cursor: pointer;
  text-align: center;
  color: white;
  & + & {
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }
`;

function NavbarComponent({
  authInfo,
  onClickProfileImg,
  visible,
  onClickLogout,
  onClickEditProfile,
}) {
  return (
    <>
      <NavbarWrap>
        <Wrapper>
          <div className="left">
            <Link
              to="/"
              style={{ fontSize: 0, marginRight: "10px" }}
              className="logo"
            >
              <StyledLogo className="MainLogo" src={MainLogo} />
              <StyledMiniLogo className="MiniLogo" src={MiniLogo} />
            </Link>
            {/* <SearchBox /> */}
          </div>
          {authInfo && authInfo.isLoggedIn ? (
            <div className="right">
              <ProfileText>
                <span style={{ fontWeight: "bolder" }}>
                  {authInfo.userInfo.nickName}
                </span>{" "}
                님 환영합니다
              </ProfileText>
              <ProfileWrap>
                <ProfileImageWrap onClick={onClickProfileImg}>
                  <ProfileImage src={ProfileAvatar} />
                </ProfileImageWrap>
                {visible && (
                  <ProfileBoard>
                    <ProfileItem onClick={onClickEditProfile}>
                      회원 정보 변경
                    </ProfileItem>
                    <ProfileItem onClick={onClickLogout}>로그아웃</ProfileItem>
                  </ProfileBoard>
                )}
              </ProfileWrap>
            </div>
          ) : (
            <div className="right">
              <StyledLink to="/signin">로그인</StyledLink>
              <StyledLink to="/signup">회원가입</StyledLink>
            </div>
          )}
        </Wrapper>
      </NavbarWrap>
      <Spacer />
    </>
  );
}

export default NavbarComponent;
