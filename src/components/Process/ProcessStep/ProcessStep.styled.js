import { ViewScroll } from "components/ui/ViewScroll";
import styled from "styled-components";

export const ProcessCaption = styled(ViewScroll)``;

export const ProcessStep = styled.div`
	display: flex;
	margin-bottom: 64px;

	&:last-of-type {
		margin-bottom: 0;
	}
`;
