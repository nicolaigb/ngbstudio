/* eslint-disable import/prefer-default-export */
import { DefaultTheme } from 'styled-components';
import { Typography as DarkTypography } from './DarkTheme/typography';
import { Colors as DarkColors } from './DarkTheme/colors';
import { Spacing as DarkSpacing } from './DarkTheme/spacing';

export const DarkTheme: DefaultTheme = {
  Typography: DarkTypography,
  Colors: DarkColors,
  Spacing: DarkSpacing,
};
