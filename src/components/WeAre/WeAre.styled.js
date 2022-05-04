import styled from "styled-components";

export const WeAre = styled.div`
	color: ${(props) => props.theme.colors.black[0]};
	background: ${(props) => props.theme.colors.white[0]};

	padding: 32px 32px 48px;

	display: flex;
	flex-direction: column;

	${(props) => props.theme.breakpoints.small`
		padding: 104px 120px 48px;
		flex-direction: row;
	`}
`;
