import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const SelectWrapper = styled.div`
  position: relative;
  width: max-content;
`

const SelectBase = styled.select`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`
const CustomSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 16px;
  border-radius: 8px;
  padding-right: 52px;

  ${SelectBase}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color; 
  }

  ${SelectBase}:hover + & {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  width: var(--size);
  height: var(--size);
  margin: auto;
  pointer-events: none;
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <SelectBase value={value} onChange={onChange}>
        {children}
      </SelectBase>
      <CustomSelect>
        {displayedValue}
        <IconWrapper style={{'--size': 24 + 'px'}}>
          <Icon id="chevron-down" strokeWidth={2} size={24}/>
        </IconWrapper>
      </CustomSelect>
    </SelectWrapper>
  );
};

export default Select;
