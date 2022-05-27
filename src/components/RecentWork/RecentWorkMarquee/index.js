import { useScrollHeight } from "common/hooks/useScrollHeight";
import * as S from "components/RecentWork/RecentWorkMarquee/RecentWorkMarquee.styled";

export const RecentWorkMarquee = () => {
	const { scrollHeight } = useScrollHeight();

	return (
		<S.RecentWorkMarquee>
			<S.RecentWorkMarqueeCopy offsetScroll={scrollHeight * 0.4}>
				highrises — warner brothers — e11even—horizen labs—highrises —
				warner brothers — e11even—horizen labs—highrises — warner
				brothers — e11even—horizen labs—highrises — warner brothers —
				e11even—horizen labs—
			</S.RecentWorkMarqueeCopy>
		</S.RecentWorkMarquee>
	);
};
