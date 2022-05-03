import Logo from "assets/icons/logo--white.inline.svg";
import styled from "styled-components";

export const FooterLogoWrapper = styled.div`
	display: flex;
	align-items: center;

	& > * {
		margin-right: 8px;
	}
`;

export const FooterLogo = styled(Logo)`
	width: 120px;
	margin-left: -16px;
	margin-bottom: -32px;
`;

export const FooterText = styled.p`
	margin-bottom: 24px;
`;

export const FooterHeader = styled.h4`
	font-family: ${(props) => props.theme.fontFamily.serif};
	font-size: ${(props) => props.theme.fontSize.h4};
	font-weight: 600;

	margin: 32px 0 0;
`;

export const FooterContent = styled.div`
	display: flex;
	flex-direction: column;

	position: relative;
	flex: 0 0 320px;

	border-top: 1px solid ${(props) => props.theme.colors.black[0]};
	padding-top: 48px;
`;

export const Footer = styled.div`
	color: ${(props) => props.theme.colors.black[0]};
	background: ${(props) => props.theme.colors.white[0]};

	padding: 48px 32px 48px;

	display: flex;
	flex-direction: column;

	${(props) => props.theme.breakpoints.small`
		padding: 104px 120px 48px;
		flex-direction: row;
	`}
`;
