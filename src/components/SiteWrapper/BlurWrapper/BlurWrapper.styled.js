import styled, { css } from "styled-components";

export const BlurWrapperContent = styled.div`
	transition: filter 400ms;

	${(props) =>
		props.lock !== undefined &&
		css`
			filter: blur(6px);
			pointer-events: none;
		`};

	${(props) => props.theme.breakpoints.extraSmall`
		${(props) =>
			props.lock !== undefined &&
			css`
				transform: translateY(-${props.lock}px);
			`};
	`}
`;

export const BlurWrapper = styled.div`
	${(props) => props.theme.breakpoints.extraSmall`
		${(props) =>
			props.lock !== undefined &&
			css`
				max-height: 100vh;
				overflow: hidden;
			`};
	`}
`;
