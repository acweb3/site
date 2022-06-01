import { useWindowListener } from "common/hooks/useWindowListener";
import { createContext, useContext, useEffect, useState } from "react";

export const OpeningAnimation = createContext({});
export const useOpeningAnimationContext = () => useContext(OpeningAnimation);

export const OpeningAnimationContext = ({ children }) => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	useEffect(() => {
		const sto = setTimeout(() => {
			setIsCollapsed(true);
		}, 2777);

		return () => {
			clearTimeout(sto);
		};
	}, []);

	useWindowListener(
		"scroll",
		(e) => {
			e.preventDefault();

			if (!isCollapsed) {
				setIsCollapsed(true);
			}
		},
		[isCollapsed]
	);

	return (
		<OpeningAnimation.Provider
			value={{
				isCollapsed,
			}}
		>
			{children}
		</OpeningAnimation.Provider>
	);
};
