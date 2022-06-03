import { ViewScroll } from "components/ui/ViewScroll";
import styled, { css } from "styled-components";

export const ProcessCaption = styled(ViewScroll)`
	${(props) => props.theme.breakpoints.extraSmall`
		width: 360px;
		margin-right: auto;
	`}
`;

export const ProcessStepImage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	${(props) => props.theme.breakpoints.extraSmall`
		padding: 0px 32px;
	`}
`;

export const ProcessStepVisual = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const ProcessStep = styled.div`
	background: ${(props) => props.theme.colors.white[0]};
	display: flex;
	flex-direction: column;

	position: relative;

	transition: transform 200ms linear;
	will-change: transform;
	padding: 80px 0px 32px;
	border-top: 1px solid;

	&:first-of-type {
		border-top: none;
	}

	${(props) => props.theme.breakpoints.extraSmall`
		padding: 80px 32px 80px 80px;

		flex-direction: row;

		&:first-of-type {
			border-top: 1px solid;
		}

		&:last-of-type {
			padding-bottom: 128px;
		}
	`}
`;
