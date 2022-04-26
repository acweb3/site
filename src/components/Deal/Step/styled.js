import styled from "styled-components";

export const StepImage = styled.div`
	width: 400px;
	height: 600px;
	background: #00b;

	display: block;
	content: " ";
`;

export const Caption = styled.div`
	padding: 16px 8px;
	background: #fff;
`;

export const Step = styled.div`
	display: flex;
	flex-direction: column;

	width: 400px;
	font-size: 1rem;

	background: #fff;
	border: 1px solid #000;

	margin-bottom: 32px;
	margin-right: 16px;

	position: relative;
	z-index: 2;

	&::after {
		z-index: -1;
		position: absolute;
		top: 16px;
		left: 16px;
		content: " ";
		display: block;
		width: 100%;
		height: 100%;
		border: 1px solid black;
	}
`;
