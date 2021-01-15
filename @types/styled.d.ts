import { FlattenSimpleInterpolation } from 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    Typography: {
      bigTitleStyle: FlattenSimpleInterpolation;
      titleStyle: FlattenSimpleInterpolation;
      headerStyle: FlattenSimpleInterpolation;
      subheaderStyle: FlattenSimpleInterpolation;
      emphasizedStyle: FlattenSimpleInterpolation;
      regularStyle: FlattenSimpleInterpolation;
      subtitleStyle: FlattenSimpleInterpolation;
    };

    Colors: {
      background: string;
      placeholder: string;
      lightGrey: string;
      text: string;
      emphasis: string;
    }
  }
}
