import { useState } from "react";

export const ReadMore = ({ children }) => {
	const text = children;
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};
	
	return (
		<p className="text-gray-700 dark:text-gray-200">
			{isReadMore ? text.slice(0, 150) : text}
			<span className="underline font-medium cursor-pointer" onClick={toggleReadMore}>
				{isReadMore ? "...read more" : " show less"}
			</span>
		</p>
	);
};