import { createContext, useContext, useState } from "react";

export const IsSignup = createContext({});
export const useIsSignupContext = () => useContext(IsSignup);

export const IsSignupContext = ({ children }) => {
	const [isSignup, setIsSignup] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		projectName: "",
		description: "",
		launchDate: "",
	});

	return (
		<IsSignup.Provider
			value={{
				isSignup,
				setIsSignup,
				form,
				setForm,
			}}
		>
			{children}
		</IsSignup.Provider>
	);
};
