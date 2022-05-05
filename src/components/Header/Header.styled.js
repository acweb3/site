import styled from "styled-components";

export const HeaderBigAssHeader = styled.h1`
	font-family: ${(props) => props.theme.fontFamily.serif};
	font-size: 7rem;
	line-height: 6rem;
	font-weight: 600;

	margin: 32px 0 16px;
`;

export const Header = styled.header`
	padding: 32px 120px 32px;
	color: ${(props) => props.theme.colors.black[0]};
	background: ${(props) => props.theme.colors.white[0]};

	display: flex;
	flex-direction: row;

	margin-bottom: 64px;
`;
