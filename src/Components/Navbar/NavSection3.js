import React from "react";

const NavSection3 = ({ imgSrc, tooltip, eventHandler }) => {
	return (
		<div
			onClick={eventHandler}
			className="w-10 h-10 bg-gray-3 flex items-center justify-center rounded-full overflow-hidden"
		>
			<img src={imgSrc} />
		</div>
	);
};

export default NavSection3;
