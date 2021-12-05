import React from "react";
import styled, { keyframes } from "styled-components";
import Responsive from "../common/Responsive";
import Hover from "../../assets/global/Hover.png";
import palette from "../../libs/styles/palette";

const VaccineStatBlock = styled(Responsive)``;

const VaccineStatBox = styled.div`
  margin-top: 3rem;
  width: 150px;
  height: auto;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 10%;
  right: 50px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
`;

const VaccineStatText = styled.div`
  font-size: large;
  text-align: center;
`;

const VaccineSubText = styled.div`
  color: ${palette.blue[6]};
  font-size: small;
`;

const Spinimg = styled.div`
  position: fixed;
  top: 30rem;
  right: 8em;
  transition: all 1s linear;

  &:hover {
    transform: rotate(720deg);
  }
`;
const StyledHr = styled.hr`
  background: gray;
`;

const Spin = styled.img`
  height: 120px;
`;

function VaccineStatComponent({ data, per, population }) {
  const baseDate = "" + per.baseDate;

  return (
    <>
      <VaccineStatBlock>
        <VaccineStatBox className="VaccineStatBox">
          <VaccineStatText>
            <VaccineSubText>
              <hr color="white" />
              <div>확진자수</div>
            </VaccineSubText>

            <div>{data}명</div>
          </VaccineStatText>
          <VaccineStatText>
            <StyledHr />
            <VaccineSubText>
              <div>1차 접종률</div>
            </VaccineSubText>

            <div>
              {((per.accumulatedFirstCnt / population) * 100).toFixed(1)}%
            </div>
          </VaccineStatText>
          <VaccineStatText>
            <StyledHr />
            <VaccineSubText>
              <div>2차 접종률</div>
            </VaccineSubText>

            <div>
              {((per.accumulatedSecondCnt / population) * 100).toFixed(1)}%
            </div>
          </VaccineStatText>

          <br />

          <div>
            &nbsp;&nbsp; &nbsp; &nbsp; 업데이트 날짜: {baseDate.substr(0, 10)}
          </div>
          <br />
        </VaccineStatBox>
        <Spinimg>
          <Spin className="Spin" src={Hover} />
        </Spinimg>
      </VaccineStatBlock>
    </>
  );
}

export default VaccineStatComponent;
