import Close from "assets/icons/close.inline.svg";
import { useWindowListener } from "common/hooks/useWindowListener";
import * as S from "components/SignupModal/SignupModal.styled";
import { useIsSignupContext } from "contexts/IsSignupContext";
import { useEffect, useState } from "react";

export const SignupModal = () => {
	const { isSignup, setIsSignup } = useIsSignupContext();
	const [isVisible, setIsVisible] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	useWindowListener(
		"keydown",
		(e) => {
			if (e.key === "Escape") {
				setIsSignup(false);
			}
		},
		[]
	);

	useEffect(() => {
		let sto;

		if (isSignup) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
			setIsClosing(true);

			sto = setTimeout(() => {
				setIsClosing(false);
			}, 1000);
		}

		return () => {
			clearTimeout(sto);
		};
	}, [isSignup]);

	return (
		<S.SignupModal isSignup={isClosing || isSignup} isVisible={isVisible}>
			<S.SignupModalValueProp>
				let us know about your project!
			</S.SignupModalValueProp>
			<S.SignupModalForm>
				<S.SignupModalClose onClick={() => setIsSignup(false)}>
					<Close />
				</S.SignupModalClose>
				<S.SignupModalSignup onComplete={() => setIsSignup(false)} />
			</S.SignupModalForm>
		</S.SignupModal>
	);
};
