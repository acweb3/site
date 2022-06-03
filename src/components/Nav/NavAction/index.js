import * as S from "components/Nav/NavAction/NavAction.styled";
import { useEffect, useRef, useState } from "react";

export const NavAction = ({ children, isActive, buttonProps }) => {
	const [isPopoverActive, setIsPopoverActive] = useState(false);
	const navActionRef = useRef();

	useEffect(() => {
		if (!isActive) {
			setIsPopoverActive(false);
			navActionRef.current.children[0].blur();
		}
	}, [isActive]);

	return (
		<S.NavAction ref={navActionRef}>
			<S.NavActionButton
				{...buttonProps}
				isActive={isPopoverActive}
				onClick={
					isActive
						? () => {
								setIsPopoverActive(
									(isPopoverActive) => !isPopoverActive
								);
						  }
						: undefined
				}
			>
				{children}
			</S.NavActionButton>
			<S.NavActionPopover
				isActive={isPopoverActive}
				onClick={(e) => {
					e.stopPropagation();
					e.preventDefault();
				}}
			>
				<S.NavActionSignup
					idModifier="nav-action"
					onComplete={() => setIsPopoverActive(false)}
				/>
			</S.NavActionPopover>
		</S.NavAction>
	);
};
