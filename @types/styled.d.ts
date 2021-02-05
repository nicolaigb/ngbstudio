import { FlattenSimpleInterpolation } from 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    Typography: {
      titleStyle: FlattenSimpleInterpolation;
      headerStyle: FlattenSimpleInterpolation;
      subheaderStyle: FlattenSimpleInterpolation;
      emphasizedStyle: FlattenSimpleInterpolation;
      regularStyle: FlattenSimpleInterpolation;
      subtitleStyle: FlattenSimpleInterpolation;
    };

    Colors: {
      background: string;
      modal: string;
      placeholder: string;
      lightGrey: string;
      text: string;
      emphasis: string;
      borderLine: string;
      inverse: string;
    }

    Spacing: {
      condensed: string;
      tight: string;
      regular: string;
      wide: string;
      extraWide: string;
      fourColumnMin: string;
      threeColumnMin: string;
      webMin: string;
      mobileMax: string;
      cellWidth: string;
    }
  }
}
