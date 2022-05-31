import styled from "styled-components";

export const RecentWorkMarqueeCopy = styled.div.attrs((attrs) => {
	return {
		style: {
			transform: `translateX(-${attrs.offsetScroll}px)`,
		},
	};
})`
	font-family: ${(props) => props.theme.fontFamily.serif};
	font-size: 120px;
	white-space: nowrap;
	transition: transform 400ms ease;
`;

export const RecentWorkMarquee = styled.div`
	width: 100%;
	overflow: hidden;
	padding-top: 16px;
`;
