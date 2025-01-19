import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ComponentBaseProps, ComponentColor, ComponentShape, ComponentSize } from '../../core';

type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ComponentBaseProps

export interface ButtonProps extends ButtonBaseProps {
  shape?: ComponentShape
  size?: ComponentSize
  variant?: 'outline' | 'link'
  color?: ComponentColor
  glass?: boolean
  wide?: boolean
  fullWidth?: boolean
  loading?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  className,
  shape,
  size,
  variant,
  color,
  glass,
  wide,
  fullWidth,
  loading,
  startIcon,
  endIcon,
  disabled,
  ...props
}, ref) => {
  const classes = twMerge(
    'btn',
    className,
    clsx(((startIcon && !loading) || endIcon) && 'gap-2', {
      'btn-lg': size === 'lg',
      'btn-md': size === 'md',
      'btn-sm': size === 'sm',
      'btn-xs': size === 'xs',
      'btn-circle': shape === 'circle',
      'btn-square': shape === 'square',
      'btn-outline': variant === 'outline',
      'btn-link': variant === 'link',
      'btn-neutral': color === 'neutral',
      'btn-primary': color === 'primary',
      'btn-secondary': color === 'secondary',
      'btn-accent': color === 'accent',
      'btn-info': color === 'info',
      'btn-success': color === 'success',
      'btn-warning': color === 'warning',
      'btn-error': color === 'error',
      'btn-ghost': color === 'ghost',
      glass: glass,
      'btn-wide': wide,
      'btn-block': fullWidth,
      'btn-disabled': disabled,
    })
  )

  return (
    <button ref={ref} className={classes} disabled={disabled} {...props}>
      {!loading && startIcon}
      {children}
      {endIcon}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
