import React from 'react'

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>
type CommonProps = { children: React.ReactNode, anchor?: boolean }

export type DropdownItemProps = CommonProps & (
  { anchor?: true } & AnchorProps |
  { anchor: false }
  )

const DropdownItem = React.forwardRef<HTMLAnchorElement, DropdownItemProps>(
  ({ anchor = true, children, ...props }, ref) => (
    <li role="menuitem">
      {anchor ? (
        <a ref={ref} {...props as AnchorProps}>{children}</a>
      ) : (
        children
      )}
    </li>
  )
)

DropdownItem.displayName = 'DropdownItem'

export default DropdownItem
