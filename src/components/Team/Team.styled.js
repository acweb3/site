import styled from "styled-components";

export const TeamDescription = styled.div`
	display: flex;
	flex-direction: row;

	margin-bottom: 64px;
`;

export const Team = styled.div`
	padding: 80px 32px 80px;

	color: ${(props) => props.theme.colors.white[0]};
	background: ${(props) => props.theme.colors.black[0]};

	${(props) => props.theme.breakpoints.extraSmall`
		padding: 80px 120px 80px;
		color: ${(props) => props.theme.colors.black[0]};
		background: ${(props) => props.theme.colors.white[0]};
	`}
`;
