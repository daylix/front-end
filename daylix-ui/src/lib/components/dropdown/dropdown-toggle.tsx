import React, { forwardRef } from 'react'
import { ComponentColor, ComponentSize, ComponentBaseProps } from '../../core'
import Button, { ButtonProps } from '../button'

export type DropdownToggleProps = Omit<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  'color'
> & ComponentBaseProps & {
  color?: ComponentColor
  size?: ComponentSize
  button?: boolean
  disabled?: boolean
}

const DropdownToggle: React.FC<DropdownToggleProps> = ({
  children,
  color,
  size,
  button = true,
  dataTheme,
  className,
  disabled,
  ...props
}) => (
  <label tabIndex={0} className={className} {...props}>
    {button ? (
      <Button
        type="button"
        data-theme={dataTheme}
        color={color}
        size={size}
        disabled={disabled}
      >
        {children}
      </Button>
    ) : (
      children
    )}
  </label>
)

export type SummaryProps = Omit<ButtonProps, 'tag'>

export const Summary = forwardRef<HTMLButtonElement, SummaryProps>(
  (props, ref) => <Button {...props} ref={ref} />
)

Summary.displayName = 'Summary'

export default DropdownToggle
