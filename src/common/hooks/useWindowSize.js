import { useWindowListener } from "common/hooks/useWindowListener";
import { useEffect, useState } from "react";
import { breakpointsMap } from "styles/breakpoints";
import { useDebounce } from "use-debounce";

const getWindowSize = (size) => {
	if (size >= breakpointsMap.large) {
		return breakpointsMap.large;
	}
	if (size >= breakpointsMap.medium) {
		return breakpointsMap.medium;
	}
	if (size >= breakpointsMap.small) {
		return breakpointsMap.small;
	}

	return breakpointsMap.extraSmall;
};

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState(undefined);
	const [debouncedWindowSize] = useDebounce(windowSize, 400);

	useEffect(() => {
		setWindowSize(getWindowSize(window.visualViewport.width));
	}, []);

	useWindowListener(
		"resize",
		() => {
			setWindowSize(getWindowSize(window.visualViewport.width));
		},
		[]
	);

	return {
		windowSize: debouncedWindowSize || windowSize,
		isMobile: debouncedWindowSize <= breakpointsMap.extraSmall,
		isLoaded: debouncedWindowSize !== undefined,
	};
};
