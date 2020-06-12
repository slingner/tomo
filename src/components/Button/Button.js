import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { colors } from '../../constants';
import cx from 'classnames';
import { fadeIn } from 'react-animations';

export const Button = React.forwardRef(({ className, ...props }, ref) => {
  return <button className={cx('Button', className)} ref={ref} {...props} />;
});

const fadeInAnimation = keyframes`${fadeIn}`;

export const FormButton = styled(Button)`
  border: transparent;
  min-width: 200px;
  color: ${({ color }) => color || colors.white};
  padding: 10px;
  margin: 15px;
  border-radius: 15px;
  font-size: 26px;
  background-color: ${colors.grey};

  :hover {
    animation: 0.5s ${fadeInAnimation};
    cursor: pointer;
  }
  :focus {
    border: ${({ focusbordercolor }) =>
      focusbordercolor || `2px solid  ${colors.white}`};
    color: ${({ focuscolor }) => focuscolor || colors.white};
  }

  @media (min-width: 700px) {
    min-width: 150px;
  }
`;
