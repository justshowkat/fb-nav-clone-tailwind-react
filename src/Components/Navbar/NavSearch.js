import React from "react";

import Search from "../../icons/search.svg";

const NavSearch = () => {
	return (
		<form className="flex bg-gray-3  items-center justify-center w-auto h-11 rounded-full px-5">
			<label className="flex gap-3">
				<img src={Search} />
				<input
					type="text"
					placeholder="Search FaceBook"
					className="bg-transparent text-gray-2 focus:outline-none "
				/>
			</label>
		</form>
	);
};

export default NavSearch;
