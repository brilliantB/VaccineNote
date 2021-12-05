import React from "react";
import styled from "styled-components";
import DropDown from "../common/dropdown/DropDown";

const DropDownWrap = styled.div`
  width: 20rem;
  padding-top: 2rem;
`;

const StyledDropDown = styled(DropDown)`
  .DropDown_Control {
    font-size: 1.3rem !important;
  }

  .DropDown_Menu {
    font-size: 1.3rem !important;
  }

  .DropDown_Arrow {
    top: 11px !important;
  }
`;

function WriteDropDown({ options, defaultOption, onChangeDropdown }) {
  return (
    <DropDownWrap>
      <StyledDropDown
        options={options}
        defaultOption={defaultOption}
        onChangeDropdown={onChangeDropdown}
      />
    </DropDownWrap>
  );
}

export default WriteDropDown;
