import styled from "styled-components";

import { breakpoints } from "../../styles/breakpoints";

import lightningSrc from "../../assets/images/lightning.png";

export const HeaderContent = styled.div`
	position: relative;

	padding: 0 4rem 2rem;

	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const BorderWrapper = styled.div`
	height: 100%;

	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: center;
	align-items: center;

	border-radius: 16px;

	background: rgb(0, 127, 255);
	background: url("${lightningSrc}");

	margin: 0px 8px 32px;

	${breakpoints.small`
		margin: 0px 16px 32px;
	`}
`;

export const HeaderContainer = styled.section`
	min-height: 600px;
	display: flex;
	flex-direction: column;

	color: #fff;

	box-sizing: border-box;

	${breakpoints.small`
		min-height: 800px;
	`}
`;

export const EmojiWidth = styled.span`
	display: inline-block;

	width: 29px;
	margin-left: -6px;

	${breakpoints.small`
		width: 72px;
		margin-left: -15px;
	`}
`;

export const H1 = styled.h1`
	font-style: italic;
	font-size: 3rem;
	line-height: 2.6rem;

	text-shadow: 9px 6px #000;

	text-align: center;
	transform: matrix3d(1, 0, 0, 0, -0.1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);

	${breakpoints.small`
		width: 62%;
		font-size: 8rem;
		line-height: 6rem;
	`}
`;

export const H2 = styled.h2`
	font-size: 2rem;
	line-height: 1.7rem;
	font-style: italic;
	width: 62%;

	text-shadow: 9px 6px #000;

	text-align: center;

	transform: matrix3d(1, 0, 0, 0, -0.1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);

	${breakpoints.small`
		width: 62%;
		font-size: 5rem;
	line-height: 4rem;
	`}
`;
