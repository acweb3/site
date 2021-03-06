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
	font-size: 60px;
	line-height: 48px;
	font-weight: 500;

	margin: 32px 0;

	${(props) => props.theme.breakpoints.extraSmall`
		font-size: 120px;
		line-height: 96px;
	`}
`;

export const HeaderInfo = styled.div`
	position: relative;

	padding: 80px 16px 48px;
	color: ${(props) => props.theme.colors.black[0]};

	display: flex;
	flex-direction: column;

	border-radius: 64px 64px 0 0;
	margin-top: -64px;
	transition: transform 100ms, opacity 400ms;
	opacity: 0;
	transform: translate3D(0, -64px, 0);

	height: calc(100% + 64px);

	${(props) =>
		props.isCollapsed &&
		css`
			opacity: 1;
			transform: translate3D(0, 0, 0);
		`}

	${(props) => props.theme.breakpoints.extraSmall`
		transform: translate3D(0, 0, 0);
		height: initial;
		padding: 80px 32px 48px;
	`}

	${(props) => props.theme.breakpoints.medium`
		transform: translate3D(0, 0, 0);
		height: initial;
		padding: 80px 128px 48px;
	`}
`;

export const HeaderInfoOffset = styled.div`
	position: relative;

	background: ${(props) => props.theme.colors.white[0]};
	margin-top: -64px;
	padding-top: 128px;
	box-shadow: ${(props) => props.theme.shadows.inverse.high};

	transition: transform 400ms;

	height: ${(props) =>
		props.resizeHeight ? `${props.resizeHeight + 64}px` : "100vh"};
	min-height: ${(props) =>
		props.resizeHeight ? `${props.resizeHeight + 64}px` : "100vh"};

	${(props) =>
		props.isCollapsed &&
		css`
			margin-bottom: -284px;
			transform: translate3D(0, -284px, 0);
		`}

	${(props) => props.theme.breakpoints.extraSmall`
		border-radius: 64px 64px 0 0;

		height: initial;
		min-height: initial;

		&::after {
			content: " ";
			position: absolute;
			left: 0;
			bottom: -24px;
			height: 32px;
			width: 100%;
			background: ${(props) => props.theme.colors.white[0]};
		}
		
		${(props) =>
			props.isCollapsed &&
			css`
				margin-bottom: -464px;
				transform: translate3D(0, -464px, 0);
			`}
	`};
`;

export const Header = styled.header``;
