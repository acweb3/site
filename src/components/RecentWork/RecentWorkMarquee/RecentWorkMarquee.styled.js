import { Marquee } from "components/ui/Marquee";
import styled, { css } from "styled-components";

const recentWorkMarqueeCss = css`
	font-family: ${(props) => props.theme.fontFamily.serif};
	font-size: 120px;
	white-space: nowrap;
`;

export const RecentWorkMarqueeAnimated = styled(Marquee)`
	${recentWorkMarqueeCss}
	position: relative;
	height: 120px;
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
	${recentWorkMarqueeCss}
	position: absolute;
	${(props) => props.theme.breakpoints.extraSmall`
		position: relative;
		transition: transform 400ms ease;
	`}
`;

export const RecentWorkMarquee = styled.div`
	position: relative;

	width: 100%;
	overflow: hidden;
	padding-top: 8px;
	height: 140px;

	${(props) => props.theme.breakpoints.extraSmall`
		padding-top: 0;
		margin-top: -48px;
		height: min-content;
	`}
`;
