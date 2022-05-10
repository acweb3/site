import LogoBolt from "assets/icons/logo--bolt.inline.svg";
import styled from "styled-components";

export const HeaderLogoBolt = styled(LogoBolt)`
	display: inline-block;
	height: 160px;
	width: 160px;
	position: absolute;
	top: -20px;
	left: -48px;
`;

export const HeaderLogoBoltWrapper = styled.div`
	position: relative;
	display: inline-flex;
	height: 100px;
	width: 0px;
`;

export const HeaderBigAssHeader = styled.h1`
	font-family: ${(props) => props.theme.fontFamily.serif};
	font-size: 7rem;
	line-height: 6rem;
	font-weight: 600;

	margin: 32px 0 16px;
`;

export const Header = styled.header`
	position: relative;

	padding: 32px 120px 152px;
	color: ${(props) => props.theme.colors.black[0]};
	background: ${(props) => props.theme.colors.white[0]};

	display: flex;
	flex-direction: row;
`;
