import styled, { css } from "styled-components";

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
                left: 0;
                bottom: 0;
                width: 100%;
                border-bottom: 1px solid ${props.theme.colors.black[0]};
            }
    `}
`;