import styled from "styled-components";

export const ViewScroll = styled.div`
	opacity: 0;
	transform: translateY(-100px);

	transition: opacity 700ms, transform 100ms;

	${(props) =>
		props.isInView &&
		`
        transform: translateY(0);
        opacity: 1;
    `}
`;
