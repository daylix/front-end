import { themesConst } from '../const/themes.const';

/**
 * Type for theme names, allowing any from themesConst or any custom string.
 */
export type DataTheme = typeof themesConst[number] | string

/**
 * Interface for component properties supporting theming.
 */
export interface ComponentBaseProps {
  /**
   * Optional theme name for the component, from predefined or custom.
   */
  dataTheme?: DataTheme
}
