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

export const TeamMembers = styled(ViewScroll)`
	display: flex;
`;
