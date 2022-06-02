import styled from "styled-components";

export const Toasts = styled.div`
	z-index: 77777;

	position: fixed;
	bottom: 32px;
	left: 50%;
	transform: translate(-50%, 0);

	display: flex;
	flex-direction: column;

	${(props) => props.theme.breakpoints.extraSmall`
		transform: initial;
		left: initial;
		right: 32px;
	`}
`;
