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
	transform: translateY(400px);
	animation: ${bounce} 1000ms ease-out;
	animation-delay: ${(props) => props.delay}ms;
	animation-fill-mode: forwards;
`;

export const HeaderMarqueeLetters = styled.div`
	/* color: rgba(120, 126, 233, 1);
	opacity: 0.6; */
	font-family: ${(props) => props.theme.fontFamily.serif};
	font-weight: 600;
	font-size: 28rem;
	margin-top: 48px;
	letter-spacing: -10px;
	transform: scaleX(1.7);
`;

export const HeaderMarquee = styled.div`
	position: relative;

	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;

	height: 320px;
	max-height: 320px;
	overflow: hidden;

	background: ${(props) => props.theme.colors.blue[0]};
	background: radial-gradient(
		circle,
		rgba(177, 181, 242, 1) 0%,
		rgba(177, 181, 242, 1) 18%,
		rgba(177, 181, 242, 1) 20%,
		rgba(177, 181, 242, 1) 65%,
		rgba(120, 126, 233, 1) 45%,
		${(props) => props.theme.colors.white[0]} 100%
	);

	transition: max-height 1000ms;

	${(props) =>
		props.isCollapsed &&
		css`
			max-height: 0;
		`}
`;
