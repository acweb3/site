import styled from "styled-components";

import { ViewScroll } from "../ViewScroll";
import { breakpoints } from "../../styles/breakpoints";

import Waves from "../../assets/icons/waves.inline.svg";

export const Paragraph = styled.p`
	font-size: 2.4rem;
	line-height: 3rem;
	color: #1f2124;
	font-weight: 200;
`;

export const SectionHeader = styled.h2`
	font-size: 4rem;
	flex: 0 0 200px;
	text-transform: lowercase;
	letter-spacing: 2.08px;
	padding-right: 2rem;
	font-weight: 100;
	font-style: italic;
	display: flex;
	align-items: center;
	text-align: center;

	display: flex;
	flex-direction: column;
	justify-content: center;

	line-height: 3rem;

	border-right: 1px solid #5c5c5c;

	display: none;

	${breakpoints.small`
		display: flex;
	`}
`;

export const SectionContent = styled.div``;

export const ParagraphWrapper = styled(ViewScroll)`
	display: flex;
	flex-direction: column;

	${breakpoints.small`
		width: 80%;
		flex-direction: row;

		& > ${SectionHeader} {
			margin-right: 112px;
		}
	`}
`;

export const BodyContent = styled.div`
	padding: 0rem 32px 48px;

	display: flex;
	justify-content: center;

	${breakpoints.small`
		padding: 112px 32px;
	`}
`;

export const WavyBottom = styled(Waves)`
	margin-top: -200px;
	margin-bottom: -5px;
`;

export const BodySection = styled.section`
	background: #fff;
`;
