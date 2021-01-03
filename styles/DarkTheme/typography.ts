import { css } from 'styled-components';

export const primaryFont = 'neue-haas-grotesk-display';

const baseTextStyle = css`
  font-family: ${primaryFont};
`;

export const Typography = {
  displayFontFamily: 'neue-haas-grotesk-display',

  textFontFamily: 'neue-haas-grotesk-text',

  h1Style: css`
    ${baseTextStyle};
    font-size: 22px;
  `,
};
