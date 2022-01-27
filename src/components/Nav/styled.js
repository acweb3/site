import styled from "styled-components";

export const AppBar = styled.nav`
	height: 4rem;
	display: flex;
	align-items: center;
	padding: 0 1rem;

	width: 100%;
	box-sizing: border-box;
`;

export const Link = styled.a`
	font-size: 1rem;
	color: #000;
	text-decoration: none;
	position: relative;

	&:after {
		content: " ";
		display: block;
		position: absolute;
		left: 0;
		bottom: -6px;
		width: 100%;
		height: 2px;
		height: 2px;
		border-bottom: 2px dashed #000;
	}

	&:focus {
		outline: none;
		color: #00b;

		&:after {
			border-color: #00b;
		}
	}
`;

export const Mail = styled.a`
	cursor: pointer;
	text-decoration: none;
	height: 20px;
	padding: 8px 8px 9px;
	background-color: #000;
	color: #fff;
	border-radius: 16px;

	&:focus {
		outline: none;
		background-color: #00b;
	}
`;

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;

	margin-left: 16px;

	& .cls-1 {
		fill: #ffd83b !important;
	}
`;

export const LinkContainer = styled.div`
	margin-left: auto;
	height: 24px;

	& > ${Link} {
		margin-right: 1rem;
	}
`;
