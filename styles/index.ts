/* eslint-disable import/prefer-default-export */
import { DefaultTheme } from 'styled-components';
import { Typography as DarkTypography } from './DarkTheme/typography';
import { Colors as DarkColors } from './DarkTheme/colors';

export const DarkTheme: DefaultTheme = {
  Typography: DarkTypography,
  Colors: DarkColors,
};
