import * as S from "components/Signup/Signup.styled";

export const Signup = ({ className, onComplete }) => {
	return (
		<S.SignupForm className={className}>
			<S.SignupInputLabel to="signup-name">your name</S.SignupInputLabel>
			<S.SignupInput id="signup-name" type="email" placeholder="kevin" />

			<S.SignupInputLabel to="signup-email">
				your email
			</S.SignupInputLabel>
			<S.SignupInput
				id="signup-email"
				type="email"
				placeholder="xxx@yyy.com"
			/>

			<S.SignupInputLabel to="signup-project-name">
				your project name
			</S.SignupInputLabel>
			<S.SignupInput
				id="signup-project-name"
				type="text"
				placeholder="aboltc coin"
			/>

			<S.SignupInputLabel to="signup-looking-for">
				describe your project
			</S.SignupInputLabel>
			<S.SignupTextArea
				id="signup-looking-for"
				type="email"
				placeholder="we're looking for a mint site and discord build for a 10K pfp"
				rows={4}
			/>

			<S.SignupInputLabel to="signup-launch">
				your launch date
			</S.SignupInputLabel>
			<S.SignupInput
				id="signup-launch"
				type="email"
				placeholder={(() => {
					const date = new Date();
					date.setDate(date.getDate() + 7);
					return date.toLocaleDateString();
				})()}
			/>
			<S.SignupSubmit
				onClick={() => {
					onComplete?.();
				}}
			>
				submit
			</S.SignupSubmit>
		</S.SignupForm>
	);
};
