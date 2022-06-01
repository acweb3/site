import * as S from "components/Signup/Signup.styled";

export const Signup = ({ className, onComplete }) => {
	return (
		<S.SignupForm className={className}>
			<S.SignupInputLabel to="nav-action-name">
				your name
			</S.SignupInputLabel>

			<S.SignupInput
				id="nav-action-name"
				type="email"
				placeholder="kevin"
			/>

			<S.SignupInputLabel to="nav-action-email">
				your email
			</S.SignupInputLabel>

			<S.SignupInput
				id="nav-action-email"
				type="email"
				placeholder="xxx@yyy.com"
			/>

			<S.SignupInputLabel to="nav-action-project-name">
				your project name
			</S.SignupInputLabel>

			<S.SignupInput
				id="nav-action-project-name"
				type="text"
				placeholder="aboltc coin"
			/>

			<S.SignupInputLabel to="nav-action-looking-for">
				describe your project
			</S.SignupInputLabel>
			<S.SignupTextArea
				id="nav-action-looking-for"
				type="email"
				placeholder="we're looking for a mint site and discord build for a 10K pfp"
				rows={4}
			/>

			<S.SignupInputLabel to="nav-action-name">
				your launch date
			</S.SignupInputLabel>

			<S.SignupInput
				id="nav-action-name"
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
