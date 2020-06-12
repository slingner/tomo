import React from 'react';
import cx from 'classnames';
import styled from 'styled-components';
import { colors } from '../../constants';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 50%;
  margin: auto;

  .alert-appear {
    opacity: 0;
    transition: all 250ms linear;
  }

  .alert-exit {
    opacity: 1;
    transition: all 250ms linear;
  }

  @media (min-width: 700px) {
    border-radius: 5px;
    width: 80%;
    justify-content: center;
    flex-direction: row;
  }
`;

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      className={cx('Input', className)}
      type='text'
      ref={ref}
      {...props}
    />
  );
});

export const FormInput = styled(Input)`
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 22px;
  background-color: ${colors.white};
  color: ${({ color }) => color || colors.white};
  text-align: center;
  align-self: center;

  :focus {
    border: 2px solid
      ${({ bordercolor }) => (bordercolor ? bordercolor : colors.lightyellow)};
  }

  @media (min-width: 700px) {
    font-size: 26px;
    min-width: 350px;
  }
`;
