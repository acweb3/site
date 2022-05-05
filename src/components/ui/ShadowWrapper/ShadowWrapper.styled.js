import styled from "styled-components";

export const ShadowWrapper = styled.div`
	position: relative;
	z-index: 1;
	background: ${(props) => props.theme.colors.white[0]};
	box-shadow: ${(props) => props.theme.shadows.medium};
`;
