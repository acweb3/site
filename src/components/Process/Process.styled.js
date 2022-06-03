import styled from "styled-components";

export const ProcessSteps = styled.div`
	flex-direction: column;

	flex: 1;
	width: 100%;
`;

export const Process = styled.div`
	position: relative;

	display: flex;
	flex-direction: row;
	padding: 0px 32px;
	width: 100%;

	${(props) => props.theme.breakpoints.extraSmall`
		padding: 32px 32px 0px;
	`}

	${(props) => props.theme.breakpoints.medium`
		padding: 64px 112px 0px;
	`}
`;
