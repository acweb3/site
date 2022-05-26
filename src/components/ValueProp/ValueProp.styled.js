import styled from "styled-components";

export const ValuePropCopy = styled.div`
	transform: translateY(-128px);
	width: 360px;
`;

export const ValueProp = styled.div`
	z-index: 2;
	position: relative;
	margin-right: auto;

	min-height: 120px;
	width: 50%;
	background-color: ${(props) => props.theme.colors.blue[1]};
	transform: translateY(-32px);
	box-shadow: ${(props) => props.theme.shadows.high};
	padding: 0 64px 32px;

	border-radius: 0 0 64px 0;

	max-height: calc(100% - 128px);

	&::before {
		content: " ";
		position: absolute;
		top: -8px;
		left: 0;

		width: calc(100% + 32px);
		height: 40px;
		background-color: ${(props) => props.theme.colors.blue[1]};
	}

	&::after {
		content: " ";
		position: absolute;
		top: -32px;
		right: -64px;
		width: 120px;
		height: 320px;
		background-color: ${(props) => props.theme.colors.blue[1]};
		/* box-shadow: ${(props) => props.theme.shadows.high}; */
		transform: rotate(32deg);
	}
`;
