import { IsSignupContext } from "contexts/IsSignupContext";
import { OpeningAnimationContext } from "contexts/OpeningAnimationContext";
import { StyleContext } from "contexts/StyleContext";
import { ToastsContext } from "contexts/ToastsContext";

export const Contexts = ({ children }) => {
	return (
		<StyleContext>
			<IsSignupContext>
				<ToastsContext>
					<OpeningAnimationContext>
						{children}
					</OpeningAnimationContext>
				</ToastsContext>
			</IsSignupContext>
		</StyleContext>
	);
};
