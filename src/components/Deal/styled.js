import styled from "styled-components";

import { breakpoints } from "../../styles/breakpoints";

export const DealContainer = styled.section`
	min-height: 700px;
	display: flex;
	align-items: center;
	justify-content: center;

	font-weight: 100;
	padding: 32px 32px;

	font-size: 2rem;

	background: rgb(255, 255, 255);
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(255, 255, 255, 1) 41%,
		rgba(255, 243, 236, 1) 73%,
		rgba(255, 215, 189, 1) 100%
	);

	${breakpoints.small`
		font-size: 5rem;
		padding: 32px 15%;
	`}
`;
