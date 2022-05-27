import Logo from "assets/icons/logo.inline.svg";
import styled from "styled-components";

export const CallToActionLogo = styled(Logo)`
	transform: rotate(-45deg);
`;

export const CallToActionLogoBox = styled.div`
	width: 120px;
	height: 120px;
	position: absolute;
	top: -60px;
	left: 0;
	right: 0;
	margin: 0 auto;
	z-index: 1;
	background: ${(props) => props.theme.colors.white[0]};

	transform: rotate(45deg);
	border: 1px solid ${(props) => props.theme.colors.black[0]};
`;

export const CallToActionCopy = styled.div`
	z-index: 2;
`;

export const CallToActionBox = styled.div`
	position: relative;
	border: 1px solid ${(props) => props.theme.colors.black[0]};
	padding: 120px 80px 80px;
	font-size: ${(props) => props.theme.fontSize.h4};
	max-width: 800px;
	margin: 0 auto;
	box-sizing: border-box;
	color: ${(props) => props.theme.colors.black[0]};
	background: ${(props) => props.theme.colors.white[0]};
`;

export const CallToAction = styled.div`
	border-radius: 64px 64px 0 0;
	position: relative;
	overflow: hidden;
	padding: 104px 120px 80px;
	margin: 0 auto 0;
	text-align: center;
	color: ${(props) => props.theme.colors.white[0]};
	background-color: ${(props) => props.theme.colors.black[0]};
	box-shadow: ${(props) => props.theme.shadows.inverse.high};
`;
