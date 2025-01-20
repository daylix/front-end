import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ComponentBaseProps } from '../../core';


export type MenuDropdownProps = React.HTMLAttributes<HTMLSpanElement> &
ComponentBaseProps & {
  label: ReactNode
  open?: boolean
}

const MenuDropdown = React.forwardRef<HTMLSpanElement, MenuDropdownProps>(
  ({ className, label, open, children, ...props }, ref) => {
    const classes = twMerge(
      'menu-dropdown-toggle',
      className,
      clsx({ 'menu-dropdown-show': open })
    )

    return (
      <>
        <span {...props} className={classes} ref={ref}>
          {label}
        </span>
        <ul className={clsx('menu-dropdown', { 'menu-dropdown-show': open })}>
          {children}
        </ul>
      </>
    )
  }
)

export default MenuDropdown
