import { css } from 'styled-components';

export const primaryFont = 'neue-haas-grotesk-text';

const baseTextStyle = css`
  font-family: ${primaryFont};
`;

export const Typography = {
  primaryFontFamily: 'neue-haas-grotesk-text',

  h1Style: css`
    ${baseTextStyle};
    font-weight: bold;
    font-size: 22px;
  `,
};
