import styled from "styled-components";

export const TeamDescription = styled.div`
	color: ${(props) => props.theme.colors.black[0]};
	background: ${(props) => props.theme.colors.white[0]};

	display: flex;
	flex-direction: row;

	margin-bottom: 64px;
`;

export const Team = styled.div`
	padding: 80px 120px 80px;
`;
