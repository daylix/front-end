import { brandColorsConst } from './brand-colors.const';
import { statusesConst } from './statuses.const';

export const colorsConst = [
  ...brandColorsConst,
  'ghost',
  ...statusesConst,
] as const
