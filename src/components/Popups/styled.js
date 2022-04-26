import styled from "styled-components";

export const CardHeader = styled.h3`
	margin: 0;
	font-weight: 100;
	font-size: 4rem;
	line-height: 3rem;
	font-style: italic;
	margin-bottom: 16px;
`;

export const BigBlurb = styled.div`
	font-weight: 100;
	font-size: 1.4rem;
	line-height: 1.5rem;

	margin-bottom: 8px;
`;

export const Blurb = styled.div`
	font-weight: 100;
	font-size: 1rem;
	line-height: 1.2rem;
`;

export const Left = styled.div`
	flex: 0 0 45%;

	margin-right: 8px;
	padding-right: 8px;
	box-sizing: border-box;

	& > * {
		margin-bottom: 16px;
	}
`;

export const Right = styled.div`
	flex: 1;

	line-height: 1.2rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const CardsContainer = styled.div`
	position: relative;

	/* margin-bottom: -300px; */
`;

export const PopupsSection = styled.section`
	background: #f0f0f0;
`;
