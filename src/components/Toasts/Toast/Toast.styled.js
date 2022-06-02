import styled from "styled-components";

export const ToastTitle = styled.div`
	font-family: ${(props) => props.theme.fontFamily.mono};
	font-size: ${(props) => props.theme.fontSize.h5};
	margin-bottom: 16px;
`;

export const ToastMessage = styled.div`
	font-family: ${(props) => props.theme.fontFamily.sansSerif};
	font-size: ${(props) => props.theme.fontSize.body};
`;

export const ToastContent = styled.div`
	padding: 16px;
`;

export const Toast = styled.div`
	display: flex;
	flex-direction: column;

	background: ${(props) => props.theme.colors.white[0]};
	border: 1px solid;
	box-shadow: ${(props) => props.theme.shadows.high};

	padding: 16px;

	width: 320px;
	min-width: 320px;
	max-width: 320px;

	margin-bottom: 16px;

	transform: translate3D(${(props) => (props.isVisible ? 0 : 400)}px, 0, 0);
	transition: transform 100ms;

	&:last-of-type {
		margin-bottom: 0;
	}
`;
