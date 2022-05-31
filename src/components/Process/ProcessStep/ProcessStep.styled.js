import { ViewScroll } from "components/ui/ViewScroll";
import styled from "styled-components";

export const ProcessCaption = styled(ViewScroll)`
	width: 360px;
	margin-right: auto;
`;

export const ProcessStepImage = styled.div`
	padding: 16px 48px;
`;

export const ProcessStepVisual = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ProcessStep = styled.div.attrs((attrs) => {
	if (attrs.isFinal)
		return {
			style: {
				transform: "translate3D(0px, 0px, 0px)",
			},
		};

	return {
		style: {
			transform: `translate3D(0px, ${attrs.offsetY}px, 0px)`,
			opacity: !attrs.isVisible && !attrs.isFinal ? 0 : 1,
		},
	};
})`
	background: ${(props) => props.theme.colors.white[0]};
	display: flex;

	position: relative;

	padding: 72px 0 168px;
	transition: transform 200ms linear;
	will-change: transform;
	padding: 80px 80px 80px;
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
`;
