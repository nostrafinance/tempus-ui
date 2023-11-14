import { FC, forwardRef, memo, HTMLProps, useMemo, PropsWithChildren, cloneElement, ReactElement } from 'react';

import './Link.scss';

export interface LinkProps extends HTMLProps<HTMLAnchorElement> {
  internalLink?: ReactElement;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const {
    children,
    className = '',
    disabled,
    title = '',
    href = '',
    target = '_blank',
    download,
    internalLink,
    onClick,
  } = props;

  const isExternal = useMemo(() => href.includes('://'), [href]);

  if (isExternal) {
    return (
      <a
        ref={ref}
        rel="external noreferrer nofollow"
        target={target}
        className={`common-ui__link ${className} ${disabled ? 'disabled' : ''}`}
        title={title}
        href={disabled ? '' : href}
        download={download}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  if (internalLink) {
    const { internalLink: l, ...remainProps } = props;
    return cloneElement(internalLink, { ...remainProps, ref });
  }

  return (
    <a
      ref={ref}
      className={`common-ui__link ${className} `}
      title={title}
      href={disabled ? '#' : href}
      download={download}
      onClick={onClick}
    >
      {children}
    </a>
  );
});

export default memo(Link as FC<LinkProps & HTMLProps<HTMLAnchorElement>>);
