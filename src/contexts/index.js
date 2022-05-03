import { ActiveRecentWorkContext } from "contexts/ActiveRecentWorkContext";
import { StyleContext } from "contexts/StyleContext";

export const Contexts = ({ children }) => {
	return (
		<StyleContext>
			<ActiveRecentWorkContext>{children}</ActiveRecentWorkContext>
		</StyleContext>
	);
};
