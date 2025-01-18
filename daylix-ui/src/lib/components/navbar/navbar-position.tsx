import React, { useMemo } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { NavbarProps } from './navbar';

/**
 * Enumeration for Navbar position options.
 * Defines the possible positions a Navbar component can align to.
 */
export enum NavbarPositionEnum {
  Start = 'start',
  Center = 'center',
  End = 'end',
}

/**
 * Type definition for Navbar position values.
 */
export type NavbarPositionType = 'start' | 'center' | 'end';

/**
 * Props for the NavbarPosition component.
 */
export type NavbarPositionProps = NavbarProps & {
  position: NavbarPositionType;
}

/**
 * The NavbarPosition component.
 * Renders a section within a Navbar, positioning its content based on the 'position' prop.
 * Utilizes 'twMerge' and 'clsx' for conditional class name merging and conditional class application.
 *
 * @param {NavbarPositionProps} props - The properties of the NavbarPosition component.
 * @param {React.Ref<HTMLDivElement>} ref - Ref forwarded to the root div element for direct DOM access.
 * @returns {React.JSX.Element} The rendered NavbarPosition component.
 */
const NavbarPosition = React.forwardRef<HTMLDivElement, NavbarPositionProps>(
  ({ children, position, dataTheme, className, style }, ref): React.JSX.Element => {
    const classes = useMemo(() => twMerge(
      className,
      clsx({
        'navbar-start': position === NavbarPositionEnum.Start,
        'navbar-center': position === NavbarPositionEnum.Center,
        'navbar-end': position === NavbarPositionEnum.End,
      })
    ), [className, position]);

    return (
      <div data-theme={dataTheme} className={classes} style={style} ref={ref}>
        {children}
      </div>
    );
  }
);

export default NavbarPosition;
