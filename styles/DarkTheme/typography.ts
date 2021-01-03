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

  headerStyle: css`
    ${boldTextStyle};
    font-size: 22px;
  `,

  subheaderStyle: css`
    ${boldTextStyle};
    font-size: 14px;
  `,

  emphasizedStyle: css`
    ${boldTextStyle};
    font-size: 10px;
  `,

  regularStyle: css`
    ${baseTextStyle};
    font-size: 10px;
  `,

  subtitleStyle: css`
    ${baseTextStyle};
    font-size: 8px;
  `,
};
