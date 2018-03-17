import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
import { title, body } from 'styles/fonts';

// place your global styles here
export default () => injectGlobal`
  ${styledNormalize}
  h1, h2, h3, h4, h5 {
    font-family: ${title};
  }

  p, span, div {
    line-height: 1.5;
    font-family: ${body};
  }
`;
