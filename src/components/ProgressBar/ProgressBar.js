/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    height: 8,
    radius: 4,
    padding: 0,
  },
  medium: {
    height: 12,
    radius: 4,
    padding: 0,
  },
  large: {
    height: 16,
    radius: 8,
    padding: 4,
  },
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 100%;
  border-radius: var(--radius);
  padding: var(--padding);

  // trim off the corner while progress near 100%
  overflow: hidden;
`;
const Bar = styled.span`
  display: block;
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
  border-radius: 4px 0 0 4px;
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  if (!styles) {
    throw new Error(`The input size: ${size} is not exist!`);
  }

  return (
    <Wrapper
      style={{
        "--radius": styles.radius + "px",
        "--padding": styles.padding + "px",
      }}
    >
      <span id="loadinglabel">
        <VisuallyHidden>Loading:</VisuallyHidden>
      </span>
      <BarWrapper>
        <Bar
          role="progressbar"
          aria-labelledby="loadinglabel"
          aria-valuenow={value}
          style={{
            "--height": styles.height + 'px',
            "--width": value + '%',
          }}
        ></Bar>
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
