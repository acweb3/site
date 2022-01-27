import styled from "styled-components";

import { breakpoints } from "../../styles/breakpoints";
import { shadows } from "../../styles/shadows";
import { ViewScroll } from "../ViewScroll";

export const ListItem = styled.li``;
export const List = styled.ul`
	font-size: 1.175rem;
	list-style: none;
	padding: 0;
	margin: 8px 0 32px;

	${breakpoints.small`
		font-size: 2rem;
	`}
`;

export const Left = styled.div`
	flex: 0 0 1;
	text-align: center;

	background: #000;
	color: #fff;

	box-sizing: border-box;
	padding: 64px 48px;
	width: 100%;

	font-size: 3rem;

	${breakpoints.small`
		padding: 16px 48px;
		font-size: 4rem;
		min-width: 720px;
		border-radius: 16px;
	`}
`;

export const WorkContent = styled(ViewScroll)`
	font-weight: 100;
	font-size: 5rem;
`;

export const WorkContainer = styled.div`
	margin-top: 300px;
	padding: 50px 0 0;

	background: #f0f0f0;
	/* min-height: 900px; */
	display: flex;
	align-items: center;
	justify-content: center;

	box-shadow: ${shadows.medium};

	${breakpoints.small`
		padding-bottom: 100px;
	`}
`;
