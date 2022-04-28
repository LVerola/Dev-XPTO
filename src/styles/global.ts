import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --dark_green: #0B582C;
    --mint_green: #1FBF76;
    --light_mint_green: #6ADBA8;
    --verylight_mint_green: #97ECC5;
    --light_green: #92F075;
    --white: #F7F8F8;
    --white_opacity: #F7F8F87F;
    --black: #1D262B;
    --dark_gray: #646262;
    --gray: #BEBEBE;
    --card_gray: #ECECEC;
    --light_gray: #D8E2E2;
    --very_light_gray: #ECECEC;
    --dark_blue: #180F55;

    --facebook: #1877F2;
    --youtube: #FF0000;
    --linkedin: #0077B7;
    --instagram_1: #A131C4;
    --instagram_2: #EF4D5C;
    --whatsapp: #1BD741;
    --phone: #8AEC75;
    --email: #333333;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    /* background: var(--white); */
    background-image: linear-gradient(to right, var(--light_green), var(--mint_green));
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`