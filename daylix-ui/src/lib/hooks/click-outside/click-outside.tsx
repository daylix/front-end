import { useCallback, useEffect, useRef } from 'react';

/**
 * Configuration options for the useDetectClickOutside hook.
 */
export interface Props {
  /**
   * Callback function to be called when an outside click or specified key press is detected.
   */
  onTriggered: (e: Event) => void;

  /**
   * If true, disables click detection.
   * @default false
   */
  disableClick?: boolean;

  /**
   * If true, disables touch detection.
   * @default false
   */
  disableTouch?: boolean;

  /**
   * If true, disables key press detection.
   * @default false
   */
  disableKeys?: boolean;

  /**
   * If true, triggers the callback on any key press.
   * @default false
   */
  allowAnyKey?: boolean;

  /**
   * An array of specific keys that should trigger the callback.
   * @default []
   */
  triggerKeys?: string[];
}

/**
 * A custom React hook that detects clicks outside a specified element or key presses.
 *
 * This hook allows you to detect when a user has clicked outside of a specific element
 * or pressed certain keys. It's useful for implementing dropdown menus, modals, or
 * other UI elements that should close when the user interacts outside of them.
 *
 * @param options - Configuration options for the hook.
 * @returns A ref object to be attached to the element you want to detect outside clicks for.
 *
 * @example
 * function MyComponent() {
 *   const ref = useDetectClickOutside({
 *     onTriggered: () => console.log('Clicked outside or pressed Escape'),
 *     triggerKeys: ['Escape', 'Enter']
 *   });
 *
 *   return <div ref={ref}>Click outside me!</div>;
 * }
 */
export function useDetectClickOutside({
  onTriggered,
  disableClick = false,
  disableTouch = false,
  disableKeys = false,
  allowAnyKey = false,
  triggerKeys = [],
}: Props): React.RefObject<HTMLElement> {
  const ref = useRef<HTMLElement | null>(null);

  /**
   * Handles key events and triggers the callback if conditions are met.
   */
  const handleKeyEvent = useCallback((e: KeyboardEvent) => {
    if (allowAnyKey || triggerKeys.includes(e.key) || e.key === 'Escape') {
      onTriggered(e);
    }
  }, [allowAnyKey, triggerKeys, onTriggered]);

  /**
   * Handles click or touch events and triggers the callback if the event occurred outside the referenced element.
   */
  const handleClickOrTouch = useCallback((e: MouseEvent | TouchEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      onTriggered(e);
    }
  }, [onTriggered]);

  useEffect(() => {
    // Add event listeners if not disabled
    if (!disableClick) document.addEventListener('click', handleClickOrTouch);
    if (!disableTouch) document.addEventListener('touchstart', handleClickOrTouch);
    if (!disableKeys) document.addEventListener('keyup', handleKeyEvent);

    // Cleanup function to remove event listeners
    return () => {
      if (!disableClick) document.removeEventListener('click', handleClickOrTouch);
      if (!disableTouch) document.removeEventListener('touchstart', handleClickOrTouch);
      if (!disableKeys) document.removeEventListener('keyup', handleKeyEvent);
    };
  }, [disableClick, disableTouch, disableKeys, handleClickOrTouch, handleKeyEvent]);

  return ref;
}
