import React from 'react';
import cx from 'classnames';
import styled from 'styled-components';
import { colors } from '../../constants';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  width: 50%;
  margin: auto;

  @media (min-width: 700px) {
    border-radius: 5px;
  }
`;

function Label({ className, ...props }) {
  return <label className={cx('Label', className)} {...props} />;
}

export const FormLabel = styled(Label)`
  color: ${(props) => (props.color ? props.color : colors.darkgrey)};
  text-align: ${(props) => (props.align ? props.align : 'left')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 'auto')};
  padding: 10px 10px 10px 0px;
  margin: 10px auto 0px auto;
  font-weight: bolder;
  width: 80%;
  min-height: 100%;

  @media (min-width: 700px) {
    width: 60%;
    margin: auto;
    margin-top: 20px;
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
  font-size: 26px;
  background-color: ${colors.white};
  color: ${({ color }) => color || colors.white};
  text-align: center;
  margin: auto;
  margin-top: 10px;
  align-self: center;

  :focus {
    border: 2px solid
      ${({ bordercolor }) => (bordercolor ? bordercolor : colors.darkblue)};
  }

  @media (min-width: 700px) {
  }
`;
