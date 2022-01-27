import styled from "styled-components";

import { ViewScroll } from "../../ViewScroll";
import { shadows } from "../../../styles/shadows";

export const CardContainer = styled(ViewScroll)`
	position: relative;

	width: 100%;
	border-radius: 16px;
	background: #fff;

	overflow: hidden;

	box-sizing: border-box;

	padding: 2rem 3rem;

	box-shadow: ${shadows.high};

	display: flex;
	flex-direction: column;
	justify-content: center;

	&::before {
		content: " ";
		position: absolute;
		top: 0;
		left: 0;
		height: 8px;
		width: 100%;
		background: rgb(0, 127, 255);
		background: linear-gradient(
			122deg,
			rgba(0, 127, 255, 1) 0%,
			rgba(34, 12, 255, 1) 16%,
			rgba(34, 12, 255, 1) 40%,
			rgba(117, 56, 255, 1) 64%,
			rgba(255, 193, 154, 1) 100%
		);
	}
`;

export const CardWrapper = styled.div`
	display: flex;
	justify-content: center;
`;
