import React from 'react'
import { Summary } from './dropdown-toggle'
import { classesFn, DropdownProps } from './dropdown'

export type DetailsProps = Omit<DropdownProps<HTMLDetailsElement>, 'item' | 'hover'>

const Details = React.forwardRef<HTMLDetailsElement, DetailsProps>(
  ({
    children,
    className,
    horizontal,
    vertical,
    end,
    dataTheme,
    open,
    ...props
  }, ref) => (
    <details
      role="listbox"
      {...props}
      ref={ref}
      data-theme={dataTheme}
      className={classesFn({
        className,
        horizontal,
        vertical,
        open,
        end,
      })}
      open={open}
    >
      {children}
    </details>
  )
)

Details.displayName = 'Details'

export default Object.assign(Details, {
  Toggle: Summary,
})
