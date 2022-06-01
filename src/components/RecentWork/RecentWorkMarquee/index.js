import { useScrollHeight } from "common/hooks/useScrollHeight";
import { useWindowSize } from "common/hooks/useWindowSize";
import * as S from "components/RecentWork/RecentWorkMarquee/RecentWorkMarquee.styled";

export const RecentWorkMarquee = () => {
	const { scrollHeight } = useScrollHeight();
	const { isMobile } = useWindowSize();

	return (
		<S.RecentWorkMarquee>
			<S.RecentWorkMarqueeCopy
				isMobile={isMobile}
				offsetScroll={scrollHeight * 0.4}
			>
				highrises — warner brothers — e11even—horizen labs—highrises —
				warner brothers — e11even—horizen labs—highrises — warner
				brothers — e11even—horizen labs—highrises — warner brothers —
				e11even—horizen labs—
			</S.RecentWorkMarqueeCopy>
		</S.RecentWorkMarquee>
	);
};
