import React from 'react';
import { twMerge } from 'tailwind-merge';
import NavbarPosition, { NavbarPositionProps, NavbarPositionType } from './navbar-position';
import { ComponentBaseProps } from '../../core';

/**
 * Type for the props of the Navbar component, combining HTML div attributes with base component props.
 */
export type NavbarProps = React.HTMLAttributes<HTMLDivElement> & ComponentBaseProps;

/**
 * Navbar component serving as the main container for navigation elements.
 * It supports theming and custom class names through props.
 */
const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(({
  children, dataTheme, className, ...props
}, ref) => {
  const classes = twMerge('navbar', className);

  return (
    <div
      role="navigation"
      aria-label="Navbar"
      {...props}
      data-theme={dataTheme}
      className={classes}
      ref={ref}>
      {children}
    </div>
  );
});

/**
 * Higher-order function to generate Navbar position components.
 */
const createNavbarPosition = (position: NavbarPositionType) =>
  React.forwardRef<HTMLDivElement, Omit<NavbarPositionProps, 'position'>>((props, ref) => (
    <NavbarPosition {...props} position={position} ref={ref} />
  ));

const NavbarStart = createNavbarPosition('start');
const NavbarCenter = createNavbarPosition('center');
const NavbarEnd = createNavbarPosition('end');

export default Object.assign(Navbar, {
  Start: NavbarStart,
  Center: NavbarCenter,
  End: NavbarEnd,
});
