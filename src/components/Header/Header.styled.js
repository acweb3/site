import styled from "styled-components";

export const Header = styled.header`
	padding: 32px 120px 32px;
	color: ${(props) => props.theme.colors.black[0]};
	background: ${(props) => props.theme.colors.white[0]};

	display: flex;
	flex-direction: row;

	margin-bottom: 64px;
`;
