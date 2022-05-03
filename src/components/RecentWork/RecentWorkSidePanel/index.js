import { useDocumentListener } from "common/hooks/useDocumentListener";
import * as S from "components/RecentWork/RecentWorkSidePanel/RecentWorkSidePanel.styled";
import { useActiveRecentWorkContext } from "contexts/ActiveRecentWorkContext";

export const RecentWorkSidePanel = () => {
	const { setActiveRecentWork } = useActiveRecentWorkContext();

	useDocumentListener(
		"keydown",
		(e) => {
			if (e.key === "Escape") {
				setActiveRecentWork(undefined);
			}
		},
		[]
	);

	return <S.RecentWorkSidePanel></S.RecentWorkSidePanel>;
};
