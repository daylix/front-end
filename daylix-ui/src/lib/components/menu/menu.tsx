import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import MenuTitle, { MenuTitleProps as TitleProps } from './menu-title'
import MenuItem, { MenuItemProps as ItemProps } from './menu-item'
import MenuDropdown, {
  MenuDropdownProps as DropdownProps,
} from './menu-dropdown'
import MenuDetails, { MenuDetailsProps as DetailsProps } from './menu-details'
import { ComponentBaseProps, ComponentSize } from '../../core';

export type MenuTitleProps = TitleProps
export type MenuItemProps = ItemProps
export type MenuDropdownProps = DropdownProps
export type MenuDetailsProps = DetailsProps

export type MenuProps = React.HTMLAttributes<HTMLUListElement> &
ComponentBaseProps & {
  vertical?: boolean
  horizontal?: boolean
  responsive?: boolean
  size?: ComponentSize
}

const Menu = React.forwardRef<HTMLUListElement, MenuProps>(
  (
    { responsive, horizontal, vertical, dataTheme, className, size, ...props },
    ref
  ) => {
    const classes = twMerge(
      'menu',
      className,
      clsx({
        'menu-vertical lg:menu-horizontal': responsive,
        'menu-lg': size === 'lg',
        'menu-md': size === 'md',
        'menu-sm': size === 'sm',
        'menu-xs': size === 'xs',
        'menu-vertical': vertical,
        'menu-horizontal': horizontal,
      })
    )

    return (
      <ul
        role="menu"
        data-theme={dataTheme}
        className={classes}
        {...props}
        ref={ref}
      />
    )
  }
)

export default Object.assign(Menu, {
  Title: MenuTitle,
  Item: MenuItem,
  Dropdown: MenuDropdown,
  Details: MenuDetails,
})
