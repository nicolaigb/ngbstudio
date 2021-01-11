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
  }
}
