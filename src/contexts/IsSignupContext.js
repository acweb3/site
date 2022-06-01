import { createContext, useContext, useEffect, useState } from "react";

export const IsSignup = createContext({});
export const useIsSignupContext = () => useContext(IsSignup);

export const IsSignupContext = ({ children }) => {
	const [isSignup, setIsSignup] = useState(false);

	return (
		<IsSignup.Provider
			value={{
				isSignup,
				setIsSignup,
			}}
		>
			{children}
		</IsSignup.Provider>
	);
};
