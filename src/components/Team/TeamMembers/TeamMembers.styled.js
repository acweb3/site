import { ViewScroll } from "components/ui/ViewScroll";
import styled from "styled-components";

export const TeamMembersLinks = styled.div`
	display: flex;
	align-items: center;

	margin-top: 16px;

	& > * {
		margin-right: 8px;
	}
`;

export const TeamMembersViewScroll = styled(ViewScroll)``;

export const TeamMembers = styled.div.attrs((attrs) => {
	return {
		style: {
			transform: `translate3D(0px, ${attrs.offsetY}px, 0px)`,
		},
	};
})`
	padding-top: 32px;
	display: flex;
	transition: transform 200ms linear;
	padding-bottom: 80px;
`;
