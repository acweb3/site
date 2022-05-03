import styled from "styled-components";

export const ViewScroll = styled.div`
	opacity: 0;
	transform: translateY(20%);

	transition: opacity 700ms, transform 200ms;

	${(props) =>
		props.isInView &&
		`
        transform: translateY(0);
        opacity: 1;
    `}
`;
