import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ComponentBaseProps } from '../../core';

/**
 * Props for the Drawer component.
 * @extends React.HTMLAttributes<HTMLDivElement>
 * @extends ComponentBaseProps
 */
export type DrawerProps = React.HTMLAttributes<HTMLDivElement> &
ComponentBaseProps & {
 /** Content to be rendered in the side panel of the drawer */
 side: ReactNode
 /** Whether the drawer is open */
 open?: boolean
 /** Whether to align the drawer to the end (right side in LTR layouts) */
 end?: boolean
 /** Additional class name for the toggle input */
 toggleClassName?: string
 /** Additional class name for the content area */
 contentClassName?: string
 /** Additional class name for the side panel */
 sideClassName?: string
 /** Additional class name for the overlay */
 overlayClassName?: string
 /** Callback function to be called when the overlay is clicked */
 onClickOverlay?: () => void
}

/**
 * Drawer component that provides a side panel that can be toggled open and closed.
 */
const Drawer: React.FC<DrawerProps> = ({
  children,
  side,
  open,
  end,
  dataTheme,
  className,
  toggleClassName,
  contentClassName,
  sideClassName,
  overlayClassName,
  onClickOverlay,
  ...props
}) => (
  <div
    aria-expanded={open}
    {...props}
    data-theme={dataTheme}
    className={twMerge('drawer', className, clsx({ 'drawer-end': end }))}
  >
    <input
      type="checkbox"
      className={clsx('drawer-toggle', toggleClassName)}
      checked={open}
      readOnly
    />
    <div className={clsx('drawer-content', contentClassName)}>{children}</div>
    <div className={clsx('drawer-side', sideClassName)}>
      <label
        className={clsx('drawer-overlay', overlayClassName)}
        onClick={onClickOverlay}
      />
      {side}
    </div>
  </div>
)

export default Drawer
