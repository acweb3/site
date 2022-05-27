import { useWindowListener } from "common/hooks/useWindowListener";
import * as S from "components/RecentWork/RecentWorkMarquee/RecentWorkMarquee.styled";
import throttle from "lodash.throttle";
import { useCallback, useState } from "react";

export const RecentWorkMarquee = () => {
	const [scrollHeight, setScrollHeight] = useState(0);

	const throttleScroll = useCallback(
		throttle(() => {
			setScrollHeight(window.scrollY);
		}, 100),
		[]
	);

	useWindowListener(
		"scroll",
		() => {
			throttleScroll();
		},
		[]
	);

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
