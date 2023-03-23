import { FC, forwardRef, memo, HTMLProps, useMemo, PropsWithChildren } from 'react';

import './Link.scss';

export interface LinkProps {
  className?: string;
  title?: string;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps>>((props, ref) => {
  const { children, className = '', disabled, title, href = '', onClick } = props;

  const isExternal = useMemo(() => href.includes('://'), [href]);

  return (
    <>
      {isExternal && (
        <a
          ref={ref}
          rel="external noreferrer nofollow"
          target="_blank"
          className={`tempus-ui__link ${className} ${disabled ? 'disabled' : ''}`}
          title={title}
          href={href}
          onClick={onClick}
        >
          {children}
        </a>
      )}
      {!isExternal && (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          ref={ref}
          className={`tempus-ui__link ${className} `}
          title={title}
          href={disabled ? '#' : href}
          onClick={onClick}
        >
          {children}
        </a>
      )}
    </>
  );
});

export default memo(Link as FC<LinkProps & HTMLProps<HTMLAnchorElement>>);
