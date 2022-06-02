import * as S from "components/Signup/Signup.styled";
import { config } from "config";
import { useIsSignupContext } from "contexts/IsSignupContext";
import { useToastsContext } from "contexts/ToastsContext";

export const Signup = ({ className, onComplete }) => {
	const { addToast } = useToastsContext();
	const { form, setForm } = useIsSignupContext();

	const formChange =
		(accessor) =>
		({ target: { value } }) => {
			setForm((form) => ({ ...form, [accessor]: value }));
		};

	const submit = () => {
		if (!Object.values(form).every(Boolean)) {
			addToast({
				title: "missing form fields",
				message: "we're missing a bit of information",
			});

			return false;
		}

		addToast({
			title: "thanks — signup completed",
			message: `we'll reach out to ${form.email} within the next 24 hours!`,
		});

		setForm((form) =>
			Object.keys(form).reduce((acc, key) => ({ ...acc, [key]: "" }), {})
		);

		const content = `**aboltc signup**\nname: ${form.name}\nemail: ${form.email}\nproject name: ${form.projectName}\nlaunch date: ${form.launchDate}\ndescription: ${form.description}`;
		fetch(config.signupEndpoint, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				content,
			}),
		});

		return true;
	};

	return (
		<S.SignupForm className={className}>
			<S.SignupInputLabel to="signup-name">your name</S.SignupInputLabel>
			<S.SignupInput
				id="signup-name"
				type="email"
				placeholder="kevin"
				value={form.name}
				onChange={formChange("name")}
			/>

			<S.SignupInputLabel to="signup-email">
				your email
			</S.SignupInputLabel>
			<S.SignupInput
				id="signup-email"
				type="email"
				placeholder="xxx@yyy.com"
				value={form.email}
				onChange={formChange("email")}
			/>

			<S.SignupInputLabel to="signup-project-name">
				your project name
			</S.SignupInputLabel>
			<S.SignupInput
				id="signup-project-name"
				type="text"
				placeholder="aboltc coin"
				value={form.projectName}
				onChange={formChange("projectName")}
			/>

			<S.SignupInputLabel to="signup-looking-for">
				describe your project
			</S.SignupInputLabel>
			<S.SignupTextArea
				id="signup-looking-for"
				type="email"
				placeholder="we're looking for a mint site and discord build for a 10K pfp"
				rows={4}
				value={form.description}
				onChange={formChange("description")}
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
				value={form.launchDate}
				onChange={formChange("launchDate")}
			/>
			<S.SignupSubmit
				onClick={() => {
					const success = submit();

					if (success) {
						onComplete?.();
					}
				}}
			>
				submit
			</S.SignupSubmit>
		</S.SignupForm>
	);
};
