import styled, { css, keyframes } from "styled-components";

const bounce = keyframes`
    0% {
        transform: translate3D(0, 400px, 0);
    }
    20% {
        transform: translate3D(0, 100px, 0);
    }
    60% {
        transform: translate3D(0, -30px, 0);
    }
    100% {
        transform: translate3D(0, 0px, 0);
    }
`;

export const HeaderMarqueeLetter = styled.span`
	will-change: transform;
	display: inline-block;
	transform: translate3D(0, 500px, 0);
	animation: ${bounce} 700ms ease-out;
	animation-delay: ${(props) => props.delay}ms;
	animation-fill-mode: forwards;
	color: ${(props) => props.theme.colors.black[0]};
`;

export const HeaderMarqueeLetters = styled.div`
	color: ${(props) => props.theme.colors.white[0]};
	font-family: ${(props) => props.theme.fontFamily.serif};
	font-size: 180px;
	margin-top: -24px;
	white-space: nowrap;

	${(props) => props.theme.breakpoints.extraSmall`
		font-size: 600px;
		margin-top: 0;
	`}
`;

export const HeaderMarquee = styled.div`
	position: relative;

	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	height: 220px;

	overflow: hidden;

	background: ${(props) => props.theme.colors.white[0]};

	${(props) => props.theme.breakpoints.extraSmall`
		height: 400px;
	`}
`;
