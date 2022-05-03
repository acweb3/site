import styled from "styled-components";

export const BaseTextArea = styled.textarea`
	padding: 16px;
	outline: none;
	border: 1px solid ${(props) => props.theme.colors.black[0]};
	box-sizing: border-box;
	font-size: ${(props) => props.theme.fontSize.body};
	font-family: ${(props) => props.theme.fontFamily.mono};
`;
