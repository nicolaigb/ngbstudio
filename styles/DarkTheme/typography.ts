import { css } from 'styled-components';

export const primaryFont = 'neue-haas-grotesk-text';

const baseTextStyle = css`
  font-family: ${primaryFont};
`;

const boldTextStyle = css`
  ${baseTextStyle};
  font-weight: bold;
`;

export const Typography = {
  primaryFontFamily: 'neue-haas-grotesk-text',

  titleStyle: css`
    ${boldTextStyle};
    font-size: 48px;
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
  `,

  subtitleStyle: css`
    ${boldTextStyle};
    font-size: 10px;
  `,
};
