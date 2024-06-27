import { FC, forwardRef, memo, HTMLProps } from 'react';

import './ButtonWrapper.scss';
export interface ButtonWrapperProps extends HTMLProps<HTMLButtonElement> {
  selected?: boolean;
  fullWidth?: boolean;
}

const ButtonWrapper = forwardRef<HTMLButtonElement, ButtonWrapperProps>((props, ref) => {
  const { children, className, disabled, selected, fullWidth, ...rest } = props;

  return (
    <button
      {...rest}
      ref={ref}
      className={`common-ui__btn ${className}`}
      data-selected={selected}
      data-disabled={disabled}
      data-full-width={fullWidth}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
});

export default memo(ButtonWrapper as FC<ButtonWrapperProps>);
