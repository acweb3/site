import { Toast } from "components/Toasts/Toast";
import * as S from "components/Toasts/Toasts.styled";
import { useToastsContext } from "contexts/ToastsContext";

export const Toasts = () => {
	const { toasts } = useToastsContext();

	return (
		<S.Toasts>
			{toasts.map((toast) => (
				<Toast key={toast.key} toast={toast} />
			))}
		</S.Toasts>
	);
};
