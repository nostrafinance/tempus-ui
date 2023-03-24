import { FC, MouseEvent, forwardRef, memo, HTMLProps, ReactNode } from 'react';

import './ButtonWrapper.scss';

export interface ButtonWrapperProps {
  className?: string;
  title?: string;
  disabled?: boolean;
  selected?: boolean;
  value?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  children: ReactNode;
}

const ButtonWrapper = forwardRef<HTMLButtonElement, ButtonWrapperProps>((props, ref) => {
  const {
    children,
    className = '',
    title,
    disabled = false,
    selected = false,
    value,
    onClick,
    onMouseOver,
    onMouseOut,
    onFocus,
    onBlur,
  } = props;

  return (
    <button
      ref={ref}
      className={`common-ui__btn ${className}`}
      title={title}
      disabled={disabled}
      value={value}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onFocus={onFocus}
      onBlur={onBlur}
      data-selected={selected}
      data-disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
});

export default memo(ButtonWrapper as FC<ButtonWrapperProps & HTMLProps<HTMLButtonElement>>);
