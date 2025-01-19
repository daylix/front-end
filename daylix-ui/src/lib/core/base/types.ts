import {
  bgColorConst,
  brandColorsConst,
  colorsConst,
  positionConst,
  shapesConst,
  sizesConst,
  statusesConst,
  themesConst
} from '../const';

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
  dataTheme?: DataTheme;
}

export type ComponentColor = typeof colorsConst[number]
export type ComponentPosition = typeof positionConst[number]
export type ComponentShape = typeof shapesConst[number]
export type ComponentSize = typeof sizesConst[number]
export type ComponentStatus = typeof statusesConst[number]
export type ComponentBrandColors = typeof brandColorsConst[number]
export type ComponentBgColors = typeof bgColorConst[number]
