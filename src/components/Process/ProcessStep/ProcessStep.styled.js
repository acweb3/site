import { ViewScroll } from "components/ui/ViewScroll";
import styled from "styled-components";

export const ProcessCaption = styled(ViewScroll)`
	${(props) => props.theme.breakpoints.extraSmall`
		width: 360px;
		margin-right: auto;
	`}
`;

export const ProcessStepImage = styled.div`
	padding: 16px 48px;
`;

export const ProcessStepVisual = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ProcessStep = styled.div.attrs((attrs) => {
	if (attrs.isFinal || attrs.isMobile)
		return {
			style: {
				transform: "translate3D(0px, 0px, 0px)",
			},
		};

	return {
		style: {
			transform: `translate3D(0px, ${attrs.offsetY}px, 0px)`,
		},
	};
})`
	background: ${(props) => props.theme.colors.white[0]};
	display: flex;
	flex-direction: column;

	position: relative;

	transition: transform 200ms linear;
	will-change: transform;
	padding: 80px 0px 80px;
	border-top: 1px solid;

	&:first-of-type {
		border-top: none;
	}

	&:last-of-type {
		border-bottom: none;
		&::after {
			content: " ";
			position: absolute;
			left: -8px;
			bottom: -5px;
			height: 85px;
			width: calc(100% + 16px);
			background: ${(props) => props.theme.colors.white[0]};
		}
	}

	${(props) => props.theme.breakpoints.extraSmall`
		padding: 80px 32px 80px 80px;

		flex-direction: row;

		&:first-of-type {
			border-top: 1px solid;
		}
	`}
`;
