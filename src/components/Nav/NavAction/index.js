import { Email16 } from "@carbon/icons-react";
import { useWindowListener } from "common/hooks/useWindowListener";
import * as S from "components/Nav/NavAction/NavAction.styled";
import { BaseButton } from "components/ui/BaseButton";
import { useEffect, useRef, useState } from "react";

export const NavAction = ({ children, isActive }) => {
	const [isPopoverActive, setIsPopoverActive] = useState(false);
	const navActionRef = useRef();

	useEffect(() => {
		if (!isActive) {
			setIsPopoverActive(false);
			navActionRef.current.children[0].blur();
		}
	}, [isActive]);

	return (
		<S.NavAction
			ref={navActionRef}
			onFocus={
				isActive
					? () => {
							setIsPopoverActive(true);
					  }
					: undefined
			}
			onBlur={() => setIsPopoverActive(false)}
		>
			<S.NavActionButton isActive={isPopoverActive}>
				{children}
			</S.NavActionButton>
			<S.NavActionPopover
				isActive={isPopoverActive}
				onMouseDown={(e) => {
					e.stopPropagation();
					e.preventDefault();
				}}
			>
				<S.NavActionForm>
					<S.NavActionInputLabel to="nav-action-email">
						your email{" "}
						<Email16
							css={`
								margin-top: 2px;
							`}
						/>
					</S.NavActionInputLabel>
					<S.NavActionInput
						id="nav-action-email"
						type="email"
						placeholder="xxx@yyy.com"
						onMouseDown={(e) => e.stopPropagation()}
					/>
					<S.NavActionInputLabel to="nav-action-looking-for">
						how can we help?
					</S.NavActionInputLabel>
					<S.NavActionTextArea
						id="nav-action-looking-for"
						type="email"
						placeholder="we're looking for a discord build"
						rows={4}
						onMouseDown={(e) => e.stopPropagation()}
					/>
					<S.NavActionInputLabel to="nav-action-anything-else">
						is there anything else?
					</S.NavActionInputLabel>
					<S.NavActionTextArea
						id="nav-action-anything-else"
						type="email"
						placeholder="show us some love"
						onMouseDown={(e) => e.stopPropagation()}
					/>
					<S.NavActionSubmit>submit</S.NavActionSubmit>
				</S.NavActionForm>
			</S.NavActionPopover>
		</S.NavAction>
	);
};
