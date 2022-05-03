import styled, { css } from "styled-components";
import { breakpoints } from "styles/breakpoints";

export const ColumnText = styled.p`
	margin-bottom: 24px;
`;

export const ColumnHeader = styled.h4`
	font-family: ${(props) => props.theme.fontFamily.serif};
	font-size: ${(props) => props.theme.fontSize.h4};
	font-weight: 600;

	margin: 32px 0 0;

	${(props) =>
		props.main &&
		css`
			font-size: ${(props) => props.theme.fontSize.h1};
		`}
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
			bottom: 64px;
			width: 100%;
			border-bottom: 1px solid ${props.theme.colors.black[0]};
		}
	`}
`;

export const WeAre = styled.div`
	color: ${(props) => props.theme.colors.black[0]};
	background: ${(props) => props.theme.colors.white[0]};

	padding: 32px 32px 48px;

	display: flex;
	flex-direction: column;

	${(props) => props.theme.breakpoints.small`
		padding: 104px 120px 48px;
		flex-direction: row;
	`}
`;
