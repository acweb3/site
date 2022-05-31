import styled, { keyframes } from "styled-components";

const blink = keyframes`
	0% {opacity: 0}
	49%{opacity: 0}
	50% {opacity: 1}
`;

export const ClockBlink = styled.span`
	animation: ${blink} 1s infinite;
`;

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
	width: 144px;
`;

export const Clocks = styled.div`
	font-family: ${(props) => props.theme.fontFamily.mono};
	position: absolute;
	top: 304px;
	right: -124px;
	transform: rotate(90deg);

	display: flex;
	justify-content: center;
`;
