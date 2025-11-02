import { HTMLAttributes } from 'react';
import clsx from 'clsx';

/**
 * Header
 * -------------------------
 * Responsive header with a subtle top-to-bottom gradient that adapts to light/dark themes.
 */
export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  contentAttributes?: HTMLAttributes<HTMLDivElement>;
}

export const Header: React.FC<HeaderProps> = ({
  className,
  children,
  contentAttributes,
  ...props
}) => {
  const { className: contentClassName, ...contentAttr } = contentAttributes ?? {};

  return (
    <header
      {...props}
      className={clsx(
        'w-full z-50 fixed top-0 left-0 right-0',
        className
      )}
    >
      <div
        className={clsx(
          'container h-20 flex items-center px-6',
          contentClassName
        )}
        {...contentAttr}
      >
        {children}
      </div>
    </header>
  );
};
