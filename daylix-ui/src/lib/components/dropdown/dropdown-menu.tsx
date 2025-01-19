import React from 'react'
import { twMerge } from 'tailwind-merge'
import { ComponentBaseProps } from '../../core';

export interface DropdownMenuProps extends React.HTMLAttributes<HTMLUListElement>, ComponentBaseProps {}

const DropdownMenu = ({
  dataTheme,
  className,
  ...props
}: DropdownMenuProps) => {
  const classes = twMerge(
    'dropdown-content menu p-2 shadow bg-base-100 rounded-box z-[1]',
    className
  )

  return (
    <ul
      {...props}
      tabIndex={0}
      data-theme={dataTheme}
      className={classes}
      role="menu"
    />
  )
}

DropdownMenu.displayName = 'DropdownMenu'

export default DropdownMenu
