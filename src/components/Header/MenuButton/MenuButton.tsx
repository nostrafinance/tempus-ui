import React, { FC, useCallback, useRef } from 'react';

import './MenuButton.scss';

interface MenuButtonProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const MenuButton: FC<MenuButtonProps> = (props): JSX.Element => {
  const { checked, onChange } = props;

  const checkboxRef = useRef<HTMLInputElement>(null);

  const onCheckboxClick = useCallback((event: React.MouseEvent<HTMLInputElement>) => event.preventDefault(), []);

  const onWrapperClick = useCallback(() => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = !checkboxRef.current.checked;

      onChange(checkboxRef.current.checked);
    }
  }, [onChange]);

  return (
    <div
      className={`common-ui__menu-button__wrapper ${checked ? 'common-ui__menu-button__checked' : ''}`}
      onClick={onWrapperClick}
    >
      <div className="common-ui__menu-button">
        <input
          type="checkbox"
          id="common-ui-header-menu-button"
          checked={checked}
          ref={checkboxRef}
          onClick={onCheckboxClick}
          readOnly
        />
        <label
          htmlFor="common-ui-header-menu-button"
          className="common-ui__menu-button__label common-ui__menu-button__light"
        />
      </div>
    </div>
  );
};
export default MenuButton;
