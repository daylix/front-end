import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ComponentBaseProps } from '../../core';

export type PaginationProps = React.HTMLAttributes<HTMLDivElement> &
                        ComponentBaseProps & {
                          responsive?: boolean
                          vertical?: boolean
                          horizontal?: boolean
                        }

const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      dataTheme,
      className,
      children,
      responsive,
      vertical,
      horizontal,
      ...props
    },
    ref
  ): React.JSX.Element => {
    const classes = twMerge(
      'join',
      clsx({
        'join-vertical': !responsive && vertical,
        'join-horizontal': !responsive && horizontal,
        'join-vertical lg:join-horizontal': responsive,
      }),
      className
    )

    return (
      <div {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {children}
      </div>
    )
  }
)

Pagination.displayName = 'Pagination'

export default Pagination
