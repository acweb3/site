import { useWindowListener } from "common/hooks/useWindowListener";
import throttle from "lodash.throttle";
import { useCallback, useState } from "react";

export const useScrollHeight = () => {
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

	return { scrollHeight };
};
