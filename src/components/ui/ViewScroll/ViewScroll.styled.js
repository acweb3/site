import styled from "styled-components";

export const ViewScroll = styled.div`
	${(props) => props.theme.breakpoints.extraSmall`
		opacity: 0;
		transform: translateY(-100px);
		transition: opacity 700ms, transform 100ms;

		${(props) =>
			props.isInView &&
			`
			transform: translateY(0);
			opacity: 1;
		`}
	`}
`;
