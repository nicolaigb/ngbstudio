import { css } from 'styled-components';

export const primaryFont = 'neue-haas-grotesk-text';

const boldTextStyle = css`
  font-family: ${primaryFont};
  font-weight: bold;
`;

const baseTextStyle = css`
  font-family: ${primaryFont};
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
    ${baseTextStyle};
    font-size: 8px;
  `,
};
