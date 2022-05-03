import { createContext, useContext, useEffect, useState } from "react";

export const ActiveRecentWork = createContext({});
export const useActiveRecentWorkContext = () => useContext(ActiveRecentWork);

export const ActiveRecentWorkContext = ({ children }) => {
	const [activeRecentWork, setActiveRecentWork] = useState();

	return (
		<ActiveRecentWork.Provider
			value={{
				activeRecentWork,
				setActiveRecentWork,
			}}
		>
			{children}
		</ActiveRecentWork.Provider>
	);
};
