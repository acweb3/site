import { ViewScroll } from "components/ui/ViewScroll";
import styled, { css } from "styled-components";

export const RecentWorkSup = styled.div`
	font-size: 0.5rem;
	font-family: ${(props) => props.theme.fontFamily.mono};
	padding: 4px 8px;
	border: 1px solid ${(props) => props.theme.colors.black[0]};
	height: min-content;
	margin-left: 8px;
	letter-spacing: 2.4px;
	border-radius: 8px;
`;

export const RecentWorkCopy = styled.div`
	max-width: 480px;

	${(props) =>
		props.isRight &&
		css`
			text-align: right;
			margin-top: 32px;
		`}
`;

export const RecentWorkHeader = styled.h4`
	font-family: ${(props) => props.theme.fontFamily.serif};
	font-size: ${(props) => props.theme.fontSize.h1};
	font-weight: 600;
	margin: 16px 0;
	display: flex;
`;

export const RecentWorkSpreadCopy = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const RecentWorkProject = styled(ViewScroll)`
	position: relative;

	display: flex;
	flex-direction: column;

	width: ${(props) => props.width}px;
	margin-bottom: 96px;

	background: ${(props) => props.theme.colors.white[0]};

	${(props) =>
		props.isRight &&
		css`
			margin-left: auto;
		`}
`;

export const RecentWorkProjects = styled.div`
	display: flex;
	flex-direction: row;

	& > ${RecentWorkProject} {
		margin-right: 64px;
	}

	&:last-of-type {
		& > ${RecentWorkProject} {
			margin-bottom: 0px;
		}
	}

	${(props) =>
		props.isRight &&
		css`
			margin-left: auto;
			margin-right: 0;

			& > ${RecentWorkProject} {
				margin-right: 0;
			}
		`}
`;

export const RecentWorkPortfolio = styled.div`
	display: flex;
	flex-direction: column;
`;

export const RecentWorkBannerCopy = styled.div`
	font-family: ${(props) => props.theme.fontFamily.mono};
	position: sticky;
	top: 88px;
	left: 0;
	transform: rotate(90deg);
	white-space: nowrap;
	height: 0px;
	line-height: 0;
	width: 0px;
	text-transform: lowercase;
	letter-spacing: 1.6px;
`;

export const RecentWorkBanner = styled.div`
	position: relative;
	border-right: 1px solid ${(props) => props.theme.colors.black[0]};
	margin-right: 64px;
	width: 48px;
	min-width: 48px;
	padding-bottom: 160px;
`;

export const RecentWork = styled.div`
	position: relative;

	display: flex;
	flex-direction: row;
	padding: 88px 120px 32px 72px;
`;
