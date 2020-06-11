import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { colors } from '../../constants';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = React.forwardRef(({ className, ...props }, ref) => {
  return <button className={cx('Button', className)} ref={ref} {...props} />;
});

export const AngleDownButton = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <button className={cx('Button', className)} ref={ref} {...props}>
        <FontAwesomeIcon icon='angle-down' />
      </button>
    );
  }
);

export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
  40% {transform: translateY(-10px);} 
  60% {transform: translateY(-5px);} 
}
`;

export const AngleDown = styled(AngleDownButton)`
  background: transparent;
  color: ${({ color }) => (color ? color : colors.slategrey)};
  border: none;
  font-size: 1.2em;
  z-index: 11;
  animation: ${bounce} 2s linear infinite;
  :hover {
    cursor: pointer;
    color: ${colors.white};
  }
`;

export const FormButton = styled(Button)`
  border: transparent;
  min-width: 150px;
  color: ${({ color }) => color || colors.white};
  padding: 10px;
  margin: 15px;
  border-radius: 5px;
  font-size: 26px;
  background-color: ${colors.darkblue};

  :hover {
    cursor: pointer;
    color: ${({ disabled }) => !disabled && colors.teal};
    border-color: ${({ disabled }) => !disabled && colors.teal};
  }
  :focus {
    border: ${({ focusbordercolor }) =>
      focusbordercolor || `2px solid  ${colors.teal}`};
    color: ${({ focuscolor }) => focuscolor || colors.teal};
  }

  @media (min-width: 700px) {
  }
`;
