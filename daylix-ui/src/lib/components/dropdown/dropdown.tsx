import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { ComponentBaseProps } from '../../core'

import DropdownDetails from './dropdown-details'
import DropdownMenu from './dropdown-menu'
import DropdownItem from './dropdown-item'
import DropdownToggle from './dropdown-toggle'

export type DropdownProps<T extends HTMLElement = HTMLDivElement> =
  React.HTMLAttributes<T> &
  ComponentBaseProps & {
    item?: ReactNode
    horizontal?: 'left' | 'right'
    vertical?: 'top' | 'bottom'
    end?: boolean
    hover?: boolean
    open?: boolean
  }

export const classesFn = ({
  className,
  horizontal,
  vertical,
  end,
  hover,
  open,
}: Pick<
  DropdownProps,
  'className' | 'horizontal' | 'vertical' | 'end' | 'hover' | 'open'
>) =>
  twMerge(
    'dropdown',
    className,
    clsx({
      'dropdown-left': horizontal === 'left',
      'dropdown-right': horizontal === 'right',
      'dropdown-top': vertical === 'top',
      'dropdown-bottom': vertical === 'bottom',
      'dropdown-end': end,
      'dropdown-hover': hover,
      'dropdown-open': open,
    })
  )

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      children,
      className,
      item,
      horizontal,
      vertical,
      end,
      hover,
      open,
      dataTheme,
      ...props
    },
    ref
  ): JSX.Element => {
    return (
      <div
        role="listbox"
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classesFn({
          className,
          horizontal,
          vertical,
          end,
          hover,
          open,
        })}
      >
        {item ? (
          <>
            <label tabIndex={0}>{children}</label>
            <ul className="dropdown-content">{item}</ul>
          </>
        ) : (
          <>{children}</>
        )}
      </div>
    )
  }
)

export default Object.assign(Dropdown, {
  Details: DropdownDetails,
  Toggle: DropdownToggle,
  Menu: DropdownMenu,
  Item: DropdownItem,
})
