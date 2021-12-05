import React from "react";
import styled from "styled-components";

const ResponsiveWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 950px) {
    width: 75%;
    .LinkImg {
      display: none;
    }
    .VaccineStatBox {
      display: none;
    }
    .Spin {
      display: none;
    }
  }
  @media (max-width: 768px) {
    width: 75%;
    .MainLogo {
      display: none;
    }
    .MiniLogo {
      height: 50px;
      padding-top: 20px;
      padding-left: 10px;
      display: block;
    }
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveWrapper {...rest}>{children}</ResponsiveWrapper>;
};

export default Responsive;
