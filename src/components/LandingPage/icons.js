import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { keyframes } from 'styled-components';
import cx from 'classnames';
import { pulse } from 'react-animations';

export const Credit = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div className={cx('Div', className)} ref={ref} {...props}>
      <FontAwesomeIcon icon='credit-card' />
    </div>
  );
});

const bounceAnimation = keyframes`${pulse}`;

export const CreditBounce = styled(Credit)`
  background: transparent;
  border: none;
  font-size: 60px;

  padding: 20px;

  :hover {
    animation: 1s ${bounceAnimation};
  }
  @media (min-width: 800px) {
    font-size: 120px;
  }
`;

export const Invoice = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div className={cx('Div', className)} ref={ref} {...props}>
      <FontAwesomeIcon icon='file-invoice-dollar' />
    </div>
  );
});

export const InvoiceBounce = styled(Invoice)`
  background: transparent;
  border: none;
  font-size: 60px;
  padding: 20px;

  :hover {
    animation: 1s ${bounceAnimation};
  }

  @media (min-width: 800px) {
    font-size: 120px;
  }
`;

export const Bill = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div className={cx('Div', className)} ref={ref} {...props}>
      <FontAwesomeIcon icon='money-bill-wave' />
    </div>
  );
});

export const BillBounce = styled(Bill)`
  background: transparent;
  border: none;
  font-size: 60px;
  padding: 20px;

  :hover {
    animation: 1s ${bounceAnimation};
  }

  @media (min-width: 800px) {
    font-size: 120px;
  }
`;
