import styled from "styled-components";

export const NavLink = styled.a`
	font-size: 1rem;
	color: ${(props) => props.theme.colors.white[0]};
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
		border-bottom: 2px dashed ${(props) => props.theme.colors.white[0]};
	}

	&:focus {
		outline: none;
		color: #00b;

		&:after {
			border-color: #00b;
		}
	}
`;

export const NavMail = styled.a`
	cursor: pointer;
	text-decoration: none;
	height: 20px;
	padding: 8px 16px 9px;
	background-color: 1px solid ${(props) => props.theme.colors.black[0]};
	color: #fff;
	border: 1px solid ${(props) => props.theme.colors.white[0]};

	display: flex;
	align-items: center;

	&:focus {
		outline: none;
		background-color: #00b;
	}

	& > svg {
		margin-right: 8px;
		margin-top: 2px;
	}
`;

export const NavLogoContainer = styled.div`
	display: flex;
	align-items: center;
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

	& > ${NavMail} {
		margin-right: 16px;

		&:last-of-type {
			margin-right: 0;
		}
	}
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	padding: 0 32px 0 64px;

	width: 100%;
	box-sizing: border-box;
`;
