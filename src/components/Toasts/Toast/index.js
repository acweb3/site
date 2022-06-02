import * as S from "components/Toasts/Toast/Toast.styled";
import { Bolts } from "components/ui/Bolts";
import { useEffect, useState } from "react";

export const Toast = ({ toast }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);

		const sto = setTimeout(() => {
			setIsVisible(false);
		}, 6000);

		return () => {
			clearTimeout(sto);
		};
	}, []);

	return (
		<S.Toast isVisible={isVisible}>
			<Bolts />
			<S.ToastContent>
				<S.ToastTitle>{toast.title}</S.ToastTitle>
				<S.ToastMessage>{toast.message}</S.ToastMessage>
			</S.ToastContent>
			<Bolts />
		</S.Toast>
	);
};
