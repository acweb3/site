import LogoBolt from "assets/icons/logo--bolt.inline.svg";
import Logo from "assets/icons/logo.inline.svg";
import styled, { css } from "styled-components";

export const HeaderLogo = styled(Logo)`
	color: ${(props) => props.theme.colors.white[0]};
	width: 320px;
	margin-top: -64px;
	margin-bottom: -64px;
`;

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

export const HeaderInfo = styled.div`
	position: relative;

	padding: 80px 120px 96px;
	color: ${(props) => props.theme.colors.black[0]};

	display: flex;
	flex-direction: row;

	border-radius: 64px 64px 0 0;
	margin-top: -64px;
	box-shadow: ${(props) => props.theme.shadows.high};
	opacity: 0;

	transition: opacity 1000ms;

	${(props) =>
		props.isCollapsed &&
		css`
			opacity: 1;
		`}
`;

export const HeaderInfoGradient = styled.div`
	position: relative;

	background: ${(props) => props.theme.colors.white[0]};
	background: linear-gradient(
		180deg,
		${(props) => props.theme.colors.white[0]} 0%,
		${(props) => props.theme.colors.white[0]} 45%,
		rgba(146, 142, 212, 1) calc(100% - 64px)
	);

	border-radius: 64px 64px 0 0;
	margin-top: -64px;
	box-shadow: ${(props) => props.theme.shadows.high};
`;

export const Header = styled.header``;
