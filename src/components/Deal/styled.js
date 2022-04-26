import styled from "styled-components";

import { breakpoints } from "../../styles/breakpoints";
import Logo from "../../assets/icons/logo--black.inline.svg";

export const FixedLogo = styled(Logo)`
	position: sticky;
	top: 0;

	width: 350px;

	margin-left: auto;
	margin-right: auto;
	display: block;

	z-index: 3;
`;

export const Blurb = styled.div`
	font-size: 1.175rem;
	font-weight: 500;
	width: 550px;
	margin-left: auto;
	margin-right: auto;

	margin-top: -50px;
	margin-bottom: 32px;

	text-align: center;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;

	margin-top: ${(props) => (props.isOffset ? 128 : 0)}px;
`;

export const Columns = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const DealContainer = styled.section`
	min-height: 800px;

	position: relative;

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
