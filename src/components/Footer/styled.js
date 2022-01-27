import styled from "styled-components";

import { breakpoints } from "../../styles/breakpoints";

export const ColumnText = styled.p`
	// height: 1rem;
`;

export const ColumnHeader = styled.h4`
	font-size: 1.175rem;
	margin: 32px 0 0;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;

	position: relative;

	${(props) =>
		props.hasAfter &&
		`
		&::after {
			content: " ";
			display: block;
			position: absolute;
			bottom: 0;
			width: 100%;
			border-bottom: 1px solid #fff;
		}
	`}
`;

export const FooterContainer = styled.footer`
	color: #fff;
	background: #000;

	padding: 32px 32px 48px;

	display: flex;
	flex-direction: column;

	${breakpoints.small`
		padding: 64px 120px 48px;
		flex-direction: row;
	`}
`;
