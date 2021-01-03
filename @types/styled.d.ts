import { FlattenSimpleInterpolation } from 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    Typography: {
      headerStyle: FlattenSimpleInterpolation;
      subheaderStyle: FlattenSimpleInterpolation;
      emphasizedStyle: FlattenSimpleInterpolation;
      regularStyle: FlattenSimpleInterpolation;
      subtitleStyle: FlattenSimpleInterpolation;
    };
  }
}
