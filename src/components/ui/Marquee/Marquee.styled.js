import styled, { keyframes } from "styled-components";

const marquee = keyframes`
	0% { left: 0; }
  100% { left: -200%; }
`;

export const MarqueeSpan = styled.span`
	width: 100%;
	margin-left: auto;
`;

export const MarqueeContent = styled.div`
	width: 400%;
	position: absolute;
	animation: ${marquee} 15s linear infinite;
	display: flex;
`;

export const Marquee = styled.div`
	overflow: hidden;
	width: 100vw;
`;
