import styled from "styled-components";

export const BaseButtonIcon = styled.span`
	display: inline-flex;
	align-items: center;
	justify-content: center;

	height: 36px;
	width: 36px;
	border-right: 1px solid ${(props) => props.theme.colors.white[0]};

	color: ${(props) => props.theme.colors.white[0]};
	background-color: ${(props) => props.theme.colors.black[0]};
`;

export const BaseButtonContent = styled.span`
	display: inline-flex;
	padding: 0 16px 1px;
`;

export const BaseButton = styled.button`
	cursor: pointer;

	padding: 0;

	overflow: hidden;

	height: 34px;
	min-height: 34px;
	max-height: 34px;

	text-align: center;
	box-sizing: content-box;
	font-size: ${(props) => props.theme.fontSize.body};

	text-decoration: none;
	height: min-content;
	background: ${(props) => props.theme.colors.white[0]};
	color: ${(props) => props.theme.colors.black[0]};
	border: 1px solid ${(props) => props.theme.colors.black[0]};

	display: flex;
	justify-content: center;
	align-items: center;

	&:hover,
	&:active,
	&:focus {
		outline: none;
		color: ${(props) => props.theme.colors.white[0]};
		background-color: ${(props) => props.theme.colors.black[0]};
	}

	& > svg {
		margin-right: 8px;
		margin-top: 2px;
	}
`;
