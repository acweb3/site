import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    html, body {
        margin: 0;
        height: 100%;
        font-family: system-ui,-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif
    }

    html, body {
        max-width: 100vw;
        overflow-x: hidden;
    }

    h1 {
        margin: 0;
    }
`;

export const Main = styled.main`
	min-height: 100vh;
	padding-top: ${(props) => (props.isMarqueeShowing ? "3rem" : "0rem")};
`;
