import styled from "styled-components";

export const CoolButtonIcon = styled.span`
	display: inline-flex;
	align-items: center;
	justify-content: center;

	height: 36px;
	width: 36px;
	border-right: 1px solid ${(props) => props.theme.colors.white[0]};

	color: ${(props) => props.theme.colors.white[0]};
	background-color: ${(props) => props.theme.colors.black[0]};
`;

export const CoolButtonContent = styled.span`
	display: inline-flex;
	padding: 0 16px 1px;
`;

export const CoolButton = styled.button`
	cursor: pointer;

	position: relative;

	padding: 0;

	overflow: hidden;

	height: 64px;
	min-height: 64px;
	max-height: 64px;

	width: 320px;

	text-align: center;
	box-sizing: content-box;
	font-family: ${(props) => props.theme.fontFamily.mono};
	font-size: ${(props) => props.theme.fontSize.h5};

	box-shadow: 4px 8px;

	text-decoration: none;
	background: ${(props) => props.theme.colors.white[0]};
	color: ${(props) => props.theme.colors.black[0]};
	border: 1px solid ${(props) => props.theme.colors.black[0]};

	display: flex;
	justify-content: center;
	align-items: center;

	transition: transform 100ms, box-shadow 100ms;
	border-radius: 16px 0 0 0;

	&:hover,
	&:active,
	&:focus {
		transform: translate3D(-4px, -4px, 0);
		box-shadow: 12px 24px;
	}

	&::after {
		content: " ";
		height: 1px;
		width: 80px;
		position: absolute;
		top: 3px;
		right: 3px;
		background: ${(props) => props.theme.colors.black[0]};
	}

	&::before {
		content: " ";
		height: 1px;
		width: 32px;
		position: absolute;
		bottom: 3px;
		left: 3px;
		background: ${(props) => props.theme.colors.black[0]};
	}
`;
