import styled, { keyframes } from "styled-components";

const marquee = keyframes`
	0% { left: 0; }
  100% { left: -100%; }
`;

export const RecentWorkMarqueeCopy = styled.div.attrs((attrs) => {
	if (attrs.isMobile) {
		return {
			style: {
				transform: `translate3D(0, 0, 0)`,
			},
		};
	}

	return {
		style: {
			transform: `translate3D(-${attrs.offsetScroll}px, 0, 0)`,
		},
	};
})`
	position: absolute;

	font-family: ${(props) => props.theme.fontFamily.serif};
	font-size: 120px;
	white-space: nowrap;
	animation: ${marquee} 15s linear infinite;

	${(props) => props.theme.breakpoints.extraSmall`
		position: relative;
		transition: transform 400ms ease;
		animation: none;
	`}
`;

export const RecentWorkMarquee = styled.div`
	position: relative;

	width: 100%;
	overflow: hidden;
	padding-top: 16px;
	height: 140px;

	${(props) => props.theme.breakpoints.extraSmall`
		padding-top: 0;
		margin-top: -32px;
		height: min-content;
	`}
`;
