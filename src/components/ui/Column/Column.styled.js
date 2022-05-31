import styled, { css } from "styled-components";

export const ColumnActions = styled.div`
	display: flex;
	margin-top: 24px;

	& > * {
		margin-right: 16px;
	}
`;

export const ColumnText = styled.p`
	line-height: 1;
`;

export const ColumnHeader = styled.h4`
	font-family: ${(props) => props.theme.fontFamily.serif};
	font-size: ${(props) => props.theme.fontSize.h5};
	line-height: 1;
	font-weight: 600;

	margin: 0 0 16px;

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
`;
