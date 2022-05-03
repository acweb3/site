import styled from "styled-components";

export const BaseLink = styled.a`
	color: inherit;

	&:active,
	&:focus,
	&:hover {
		color: ${(props) => props.theme.colors.blue[0]};
	}
`;
