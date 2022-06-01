import Close from "assets/icons/close.inline.svg";
import * as S from "components/SignupModal/SignupModal.styled";
import { useIsSignupContext } from "contexts/IsSignupContext";

export const SignupModal = () => {
	const { setIsSignup } = useIsSignupContext();

	return (
		<S.SignupModal>
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
