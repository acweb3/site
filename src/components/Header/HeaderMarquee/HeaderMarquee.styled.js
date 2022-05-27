import styled, { css, keyframes } from "styled-components";

const bounce = keyframes`
    0% {
        transform: translateY(400px);
    }
    20% {
        transform: translateY(100px);
    }
    60% {
        transform: translateY(-30px);
    }
    100% {
        transform: translateY(0px);
    }
`;

export const HeaderMarqueeLetter = styled.span`
	display: inline-block;
	transform: translateY(500px);
	animation: ${bounce} 700ms ease-out;
	animation-delay: ${(props) => props.delay}ms;
	animation-fill-mode: forwards;
`;

export const HeaderMarqueeLetters = styled.div`
	color: ${(props) => props.theme.colors.white[0]};
	font-family: ${(props) => props.theme.fontFamily.serif};
	font-size: 600px;
`;

export const HeaderMarquee = styled.div`
	position: relative;

	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	height: 400px;
	max-height: 400px;
	overflow: hidden;

	background: ${(props) => props.theme.colors.black[0]};

	transition: max-height 400ms ease-in;

	${(props) =>
		props.isCollapsed &&
		css`
			max-height: 0;
		`}
`;
