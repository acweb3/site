import styled from "styled-components";

export const BaseLink = styled.a`
	color: inherit;
	text-decoration: none;

	&:active,
	&:focus,
	&:hover {
		outline: none;
		color: ${(props) => props.theme.colors.blue[0]};
	}
`;
