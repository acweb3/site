import Logo from "assets/icons/logo.inline.svg";
import styled from "styled-components";

export const CallToActionLogo = styled(Logo)`
	transform: rotate(-45deg);
`;

export const CallToActionLogoBox = styled.div`
	position: absolute;

	width: 80px;
	height: 80px;
	top: -40px;
	left: 0;
	right: 0;
	margin: 0 auto;
	z-index: 1;
	background: ${(props) => props.theme.colors.white[0]};

	transform: rotate(45deg);
	border: 1px solid ${(props) => props.theme.colors.black[0]};

	${(props) => props.theme.breakpoints.extraSmall`
		width: 120px;
		height: 120px;
		top: -60px;
	`}
`;

export const CallToActionCopy = styled.div`
	z-index: 2;
`;

export const CallToActionBox = styled.div`
	position: relative;
	border: 1px solid ${(props) => props.theme.colors.black[0]};
	padding: 80px 16px 48px;
	font-size: ${(props) => props.theme.fontSize.h5};
	max-width: 800px;
	margin: 0 auto;
	box-sizing: border-box;
	color: ${(props) => props.theme.colors.black[0]};
	background: ${(props) => props.theme.colors.white[0]};

	${(props) => props.theme.breakpoints.extraSmall`
		font-size: ${(props) => props.theme.fontSize.h4};
		padding: 120px 80px 80px;
	`}
`;

export const CallToAction = styled.div`
	position: relative;
	overflow: hidden;
	margin: 0 auto 0;
	padding: 48px 32px 80px;
	text-align: center;
	color: ${(props) => props.theme.colors.white[0]};
	background-color: ${(props) => props.theme.colors.black[0]};

	${(props) => props.theme.breakpoints.extraSmall`
		border-radius: 64px 64px 0 0;
		box-shadow: ${(props) => props.theme.shadows.inverse.high};
		padding: 104px 120px 80px;
	`}
`;
