import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  *,*::before,*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: relative;
    font-family: Roboto;
    font-weight: 400;
  }

  h1 {
      font-size: 100px;
      line-height: 100px;
      color: ${theme.color.darkPrimary};
  }

  h2 {
      font-size: 30px;
      line-height: 35px;
  }

  p {
      font-size: 16px;
      line-height:30px;
  }

  button {
        color: ${theme.color.darkPrimary};
        font-size: 16px;
        line-height:30px;
  }
`;
export default GlobalStyle;
