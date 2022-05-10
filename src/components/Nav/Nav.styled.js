import Logo from "assets/icons/logo.inline.svg";
import styled, { css } from "styled-components";

export const NavLink = styled.a`
	font-size: 1rem;
	color: ${(props) => props.theme.colors.black[0]};
	text-decoration: none;
	position: relative;
	height: 24px;
	margin: auto 0;

	&:after {
		content: " ";
		display: block;
		position: absolute;
		left: 0;
		bottom: -6px;
		width: 100%;
		height: 2px;
		height: 2px;
		border-bottom: 1px solid ${(props) => props.theme.colors.black[0]};
	}

	&:active,
	&:hover,
	&:focus {
		outline: none;
		color: ${(props) => props.theme.colors.blue[0]};

		&:after {
			border-color: ${(props) => props.theme.colors.blue[0]};
		}
	}
`;

export const NavLogo = styled(Logo)`
	height: 66px;
	background: transparent;
`;

export const NavLogoContainer = styled.button`
	display: flex;
	align-items: center;
	background: transparent;
	padding: 0;
	border: none;
	cursor: pointer;

	&:active,
	&:hover,
	&:focus {
		outline: none;
		color: ${(props) => props.theme.colors.blue[0]};
	}
`;

export const NavLinks = styled.div`
	display: flex;

	& > ${NavLink} {
		margin-right: 24px;

		&:last-of-type {
			margin-right: 40px;
		}
	}
`;

export const NavLinkContainer = styled.div`
	display: flex;
	margin-left: auto;
`;

const NAV_HEIGHT = 66;

export const NavOffset = styled.div`
	height: ${NAV_HEIGHT}px;
`;

export const NavContent = styled.div`
	z-index: 2;
	width: 100%;
	display: flex;
	align-items: center;
`;

export const Nav = styled.nav`
	height: ${NAV_HEIGHT}px;

	display: flex;
	align-items: center;
	padding: 0 32px 0 64px;

	position: fixed;

	z-index: 999;
	top: 0;

	width: 100%;
	box-sizing: border-box;

	transform: translateY(${(props) => (props.isVisible ? 0 : -100)}px);
	transition: transform 0.4s, box-shadow 0.4s;

	${(props) =>
		props.hasShadow &&
		css`
			box-shadow: ${props.theme.shadows.medium};
		`}

	&::after {
		content: " ";
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;

		background: ${(props) => props.theme.colors.white[0]};
		opacity: 0.9;
	}
`;
