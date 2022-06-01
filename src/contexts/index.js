import { IsSignupContext } from "contexts/IsSignupContext";
import { OpeningAnimationContext } from "contexts/OpeningAnimationContext";
import { StyleContext } from "contexts/StyleContext";

export const Contexts = ({ children }) => {
	return (
		<StyleContext>
			<IsSignupContext>
				<OpeningAnimationContext>{children}</OpeningAnimationContext>
			</IsSignupContext>
		</StyleContext>
	);
};
