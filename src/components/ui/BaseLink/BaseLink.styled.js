import styled from "styled-components";

export const BaseLink = styled.a`
	color: inherit;

	&:active,
	&:focus,
	&:hover {
		outline: none;
		color: ${(props) => props.theme.colors.blue[0]};
	}
`;
