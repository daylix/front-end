import React from 'react'
import { twMerge } from 'tailwind-merge'
import { ComponentBaseProps } from '../../core';

export type MenuTitleProps = React.LiHTMLAttributes<HTMLLIElement> &
ComponentBaseProps

const MenuTitle = React.forwardRef<HTMLLIElement, MenuTitleProps>(
  ({ className, ...props }, ref) => {
    const classes = twMerge('menu-title', className)

    return <li {...props} className={classes} ref={ref} />
  }
)

export default MenuTitle
