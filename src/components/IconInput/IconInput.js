import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZE = {
  small: {
    fontSize: 14,
    height: 24,
    borderWidth: 1,
    iconSize: 16,
  },
  large: {
    fontSize: 18,
    height: 36,
    borderWidth: 2,
    iconSize: 24,
  },
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;
const Input = styled.input`
  font-size: var(--fontSize);
  width: var(--width);
  height: var(--height);
  border: none;
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;
const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: var(--iconSize);
`;

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = SIZE[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input
        style={{
          "--fontSize": styles.fontSize + "px",
          "--height": styles.height + "px",
          "--borderWidth": styles.borderWidth + "px",
          "--width": width + 'px',
        }}
        {...delegated}
      />
      <IconWrapper style={{ "--iconSize": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize}/>
      </IconWrapper>
    </Wrapper>
  );
};

export default IconInput;
