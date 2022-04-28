import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    html, body {
        margin: 0;
        height: 100%;
        font-family: ${(props) => props.theme.fontFamily.sansSerif};
        color: ${(props) => props.theme.colors.white[0]};
        background: ${(props) => props.theme.colors.black[0]};
        max-width: 100vw;
        overflow-x: hidden;
    }

    h1 {
        margin: 0;
    }
`;

export const Main = styled.main`
	position: relative;
	min-height: 100vh;
	padding-top: ${(props) => (props.isMarqueeShowing ? "3rem" : "0rem")};
	cursor: url("${(props) => props.theme.cursors.default}"), auto;
`;
