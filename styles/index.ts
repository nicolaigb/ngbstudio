/* eslint-disable import/prefer-default-export */
import { DefaultTheme } from 'styled-components'
import { Typography } from './typography'
import { Colors as DarkColors } from './DarkTheme/colors'
import { Colors as LightColors } from './LightTheme/colors'
import { Spacing } from './spacing'

export const DarkTheme: DefaultTheme = {
  Typography,
  Colors: DarkColors,
  Spacing,
}

export const LightTheme: DefaultTheme = {
  Typography,
  Colors: LightColors,
  Spacing,
}
