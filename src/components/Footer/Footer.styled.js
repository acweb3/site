import Logo from "assets/icons/logo.inline.svg";
import { Marquee } from "components/ui/Marquee";
import styled from "styled-components";

export const FooterRightColumns = styled.div`
	display: flex;

	flex-direction: column;

	${(props) => props.theme.breakpoints.extraSmall`
		flex-direction: row;
	`}
`;

export const FooterLogoWrapper = styled.div`
	display: flex;
	align-items: center;

	margin-top: 16px;

	& > * {
		margin-right: 8px;
	}
`;

export const FooterLogo = styled(Logo)`
	width: 120px;
	margin-left: -16px;
	margin-bottom: 0px;
`;

export const FooterText = styled.p`
	margin-bottom: 16px;
`;

export const FooterHeader = styled.h4`
	font-family: ${(props) => props.theme.fontFamily.serif};
	font-size: ${(props) => props.theme.fontSize.h5};
	font-weight: 600;

	margin: 32px 0 16px;
`;

export const FooterColumn = styled.div`
	display: flex;
	flex-direction: column;

	position: relative;

	margin-bottom: 32px;

	${(props) => props.theme.breakpoints.extraSmall`
		flex: 0 0 320px;
		margin-bottom: 0;
	`}
`;

export const FooterContent = styled.div`
	position: relative;

	display: flex;
	flex-direction: column;

	${(props) => props.theme.breakpoints.extraSmall`
		flex-direction: row;
	`}
`;

export const FooterMarquee = styled(Marquee)`
	position: absolute;
	left: 0;
	bottom: -120px;
	font-size: 240px;
	height: 240px;
	font-family: ${(props) => props.theme.fontFamily.serif};
`;

export const Footer = styled.div`
	width: 100%;
	color: ${(props) => props.theme.colors.white[0]};
	background: ${(props) => props.theme.colors.black[0]};
	padding: 0px 32px 200px;

	position: relative;
	overflow: hidden;

	${(props) => props.theme.breakpoints.extraSmall`
		padding: 32px 120px 200px;
	`}
`;
