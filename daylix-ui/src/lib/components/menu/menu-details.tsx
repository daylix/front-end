import React, { ReactNode } from 'react'
import { ComponentBaseProps } from '../../core';


export type MenuDetailsProps = React.DetailsHTMLAttributes<HTMLDetailsElement> &
ComponentBaseProps & {
 label: ReactNode
 open?: boolean
}

const MenuDetails = React.forwardRef<HTMLDetailsElement, MenuDetailsProps>(
  ({ className, label, open, children, ...props }, ref) => {
    return (
      <details {...props} open={open} className={className} ref={ref}>
        <summary>{label}</summary>
        <ul>{children}</ul>
      </details>
    )
  }
)

export default MenuDetails
