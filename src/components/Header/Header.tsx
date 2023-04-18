import { FC, Fragment, memo, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import Link from '../Link';
import MenuButton from './MenuButton';

import './Header.scss';

interface HeaderProps {
  logo: ReactNode;
  logoTitle?: ReactNode;
  logoHref?: string;
  navItems: ReactNode[];
  menuItems: ReactNode[];
  menuOpened?: boolean;
  setMenuOpened: (open: boolean) => void;
}

const Header: FC<HeaderProps> = props => {
  const { logo, logoTitle, logoHref = '/', navItems, menuItems, menuOpened = false, setMenuOpened } = props;

  const menuContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuContainerRef.current) {
      menuContainerRef.current.style.left = menuOpened ? '0%' : '-100%';
    }
  }, [menuOpened]);

  const onMenuToggle = useCallback((opened: boolean) => setMenuOpened(opened), []);

  return (
    <div className="common-ui__header">
      <Link className="common-ui__header__logo" href={logoHref}>
        {logo}
        {logoTitle}
      </Link>
      <div className="common-ui__header__nav-items">{navItems}</div>

      {/* Mobile menu */}
      <div className="common-ui__header__menu">
        <div className="common-ui__header__menu-container" ref={menuContainerRef}>
          <div className="common-ui__header__menu-bar">
            <div className="common-ui__header__menu-logo">
              <Link href={logoHref} className="common-ui__header__clickable-logo">
                {logo}
                {logoTitle}
              </Link>
            </div>
          </div>
          <div className="common-ui__header__menu-body">
            {menuItems.map((item, i) => (
              <>
                {item}
                <div key={`separator-${i}`} className="common-ui__header__menu-item-separator" />
              </>
            ))}
          </div>
        </div>

        <MenuButton onChange={onMenuToggle} checked={menuOpened} />
      </div>
    </div>
  );
};
export default memo(Header);
