import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { ComponentBaseProps, ComponentColor, ComponentSize } from '../../core'

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'color'
> &
  ComponentBaseProps & {
    bordered?: boolean
    borderOffset?: boolean
    size?: ComponentSize
    color?: ComponentColor
    label?: string
    error?: string
    fullWidth?: boolean
  }

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      placeholder,
      bordered = true,
      borderOffset,
      size,
      color,
      dataTheme,
      className,
      type,
      label,
      error,
      fullWidth = false,
      id,
      ...props
    },
    ref
  ): JSX.Element => {
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`
    const classes = twMerge(
      'input',
      'w-full px-4 py-3 bg-[#141414]/60 border border-white/10 rounded-md text-white focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/25 transition-colors',
      error && 'border-red-500 focus:border-red-500 focus:ring-red-500/25',
      className,
      clsx({
        'input-lg': size === 'lg',
        'input-md': size === 'md',
        'input-sm': size === 'sm',
        'input-xs': size === 'xs',
        'input-primary': color === 'primary',
        'input-secondary': color === 'secondary',
        'input-accent': color === 'accent',
        'input-ghost': color === 'ghost',
        'input-info': color === 'info',
        'input-success': color === 'success',
        'input-warning': color === 'warning',
        'input-error': color === 'error',
        'input-bordered': bordered,
        'focus:outline-offset-0': !borderOffset,
        'w-full': fullWidth,
      })
    )

    return (
      <div className={clsx('mb-5', fullWidth && 'w-full')}>
        {label && (
          <label htmlFor={inputId} className="block mb-2 text-sm font-medium text-gray-200">
            {label}
          </label>
        )}
        <input
          {...props}
          ref={ref}
          id={inputId}
          type={type}
          value={value}
          placeholder={placeholder}
          data-theme={dataTheme}
          className={classes}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input