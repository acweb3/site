import { ActiveRecentWorkContext } from "contexts/ActiveRecentWorkContext";
import { OpeningAnimationContext } from "contexts/OpeningAnimationContext";
import { StyleContext } from "contexts/StyleContext";

export const Contexts = ({ children }) => {
	return (
		<StyleContext>
			<ActiveRecentWorkContext>
				<OpeningAnimationContext>{children}</OpeningAnimationContext>
			</ActiveRecentWorkContext>
		</StyleContext>
	);
};
