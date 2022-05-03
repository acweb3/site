import styled from "styled-components";

export const BaseButton = styled.button`
	cursor: pointer;

	text-align: center;
	box-sizing: content-box;
	font-size: ${(props) => props.theme.fontSize.body};

	text-decoration: none;
	height: 20px;
	padding: 8px 16px 9px;
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
		background-color: ${(props) => props.theme.colors.blue[0]};
	}

	& > svg {
		margin-right: 8px;
		margin-top: 2px;
	}
`;
