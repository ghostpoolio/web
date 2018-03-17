import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

// place your global styles here
export default () => injectGlobal`
  ${styledNormalize}
`;
