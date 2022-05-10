import Logo from "assets/icons/logo.inline.svg";
import styled from "styled-components";

export const FooterContentLogoWrapper = styled.div`
	display: flex;
	align-items: center;

	& > * {
		margin-right: 8px;
	}
`;

export const FooterContentLogo = styled(Logo)`
	width: 120px;
	margin-left: -16px;
	margin-bottom: -32px;
`;

export const FooterContentText = styled.p`
	margin-bottom: 24px;
`;

export const FooterContentHeader = styled.h4`
	font-family: ${(props) => props.theme.fontFamily.serif};
	font-size: ${(props) => props.theme.fontSize.h4};
	font-weight: 600;

	margin: 32px 0 0;
`;

export const FooterContentColumn = styled.div`
	z-index: 3;
	display: flex;
	flex-direction: column;

	position: relative;
	flex: 0 0 320px;

	padding-top: 48px;
`;

export const FooterContentGradient = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	z-index: 2;
	background: rgb(0, 0, 0);
	background: linear-gradient(
		270deg,
		rgba(0, 0, 0, 0) 0%,
		rgba(0, 0, 0, 1) 66%,
		rgba(0, 0, 0, 1) 100%
	);
`;

export const FooterContent = styled.div`
	position: relative;
	color: ${(props) => props.theme.colors.white[0]};
	background: ${(props) => props.theme.colors.black[0]};

	padding: 16px 120px 64px;

	display: flex;
	flex-direction: row;
`;
