import { createContext, useContext, useEffect, useRef, useState } from "react";

export const Toasts = createContext({});
export const useToastsContext = () => useContext(Toasts);

// example toast
/*{
	title,
	message,
} */

export const ToastsContext = ({ children }) => {
	const [toasts, setToasts] = useState([]);
	const keyCount = useRef(0);

	const addToast = (toast) => {
		keyCount.current = keyCount.current + 1;
		setToasts((toasts) => [
			...toasts,
			{ ...toast, key: keyCount.current, isVisible: true },
		]);
	};

	useEffect(() => {
		let sto;
		const removeKey = toasts[toasts.length - 1]?.key;

		if (removeKey) {
			sto = setTimeout(() => {
				setToasts((toasts) =>
					toasts.filter((toast) => toast.key !== removeKey)
				);
			}, 7000);
		}

		return () => {
			clearTimeout(sto);
		};
	}, [toasts]);

	return (
		<Toasts.Provider
			value={{
				toasts,
				addToast,
			}}
		>
			{children}
		</Toasts.Provider>
	);
};
