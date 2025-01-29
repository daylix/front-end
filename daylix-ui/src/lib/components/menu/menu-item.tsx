import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ComponentBaseProps } from '../../core';

export type MenuItemProps = React.LiHTMLAttributes<HTMLLIElement> &
ComponentBaseProps & {
  disabled?: boolean
}

const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  ({ className, disabled, ...props }, ref) => {
    const classes = twMerge(
      className,
      clsx({
        disabled: disabled,
      })
    )

    return <li role="menuitem" className={classes} {...props} ref={ref} />
  }
)

export default MenuItem
