import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
@import url ('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400&display=swap');

  *,*::before,*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1 {
    font-family: 'Roboto Slab', serif;
    font-size: 100px;
    line-height: 100px;
    color: ${theme.color.darkPrimary};
    margin: 120px 0 100px;

    	@media screen and (max-width: 1200px) {
        margin: 80px 0 100px;
        font-size: 70px;
        line-height: 75px;
	}

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
