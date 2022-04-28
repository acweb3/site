import styled from "styled-components";

export const ClockAttribute = styled.div`
	text-transform: lowercase;
	letter-spacing: 1.6px;
	margin-bottom: 8px;
`;

export const Clock = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-right: 48px;
	height: 0px;
	width: 120px;
`;

export const Clocks = styled.div`
	font-family: ${(props) => props.theme.fontFamily.mono};
	position: absolute;
	top: 256px;
	right: -112px;
	transform: rotate(90deg);

	display: flex;
	justify-content: center;
`;
