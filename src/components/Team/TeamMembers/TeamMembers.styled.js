import { Column } from "components/ui/Column";
import { ViewScroll } from "components/ui/ViewScroll";
import styled from "styled-components";

export const TeamMembersColumn = styled(Column)`
	margin-left: 32px;
	margin-bottom: 48px;

	flex: 0 0 calc(50% - 16px);

	& .gatsby-image-wrapper {
		background: ${(props) => props.theme.colors.white[0]};
	}

	&:first-of-type {
		margin-left: 0;
	}

	${(props) => props.theme.breakpoints.extraSmall`
		flex: 0 0 320px;
		margin-left: 48px;
	`}
`;

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
	if (attrs.isMobile) {
		return {
			style: {
				transform: "translate3D(0px, 0px, 0px)",
			},
		};
	}

	return {
		style: {
			transform: `translate3D(0px, ${attrs.offsetY}px, 0px)`,
		},
	};
})`
	display: flex;
	transition: transform 200ms linear;

	${(props) => props.theme.breakpoints.extraSmall`
		padding-bottom: 80px;
	`}
`;
