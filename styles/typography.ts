import { css } from 'styled-components';

export const primaryFont = 'Neue Haas Grotesk Display Pro';

const baseTextStyle = css`
  font-family: ${primaryFont}, Helvetica, sans-serif;
  font-weight: 500;
`;

const boldTextStyle = css`
  ${baseTextStyle};
  font-weight: bold;
`;

export const Typography = {
  primaryFontFamily: primaryFont,

  titleStyle: css`
    ${boldTextStyle};
    font-size: 48px;
    line-height: 100%;
  `,

  headerStyle: css`
    ${boldTextStyle};
    font-size: 32px;
  `,

  subheaderStyle: css`
    ${boldTextStyle};
    font-size: 24px;
  `,

  emphasizedStyle: css`
    ${boldTextStyle};
    font-size: 16px;
  `,

  regularStyle: css`
    ${baseTextStyle};
    font-size: 16px;
    line-height: 150%;
  `,

  subtitleStyle: css`
    ${boldTextStyle};
    font-size: 10px;
  `,
};
