import React, { useState } from "react";

import Logo from "../../icons/fblogo.svg";
import Hamburger from "../../icons/hamburger.svg";
import Search from "../../icons/search.svg";
import Home from "../../icons/home-outline.png";
import Watch from "../../icons/watch.svg";
import MarketPlace from "../../icons/market place.svg";
import Groups from "../../icons/groups.svg";
import Gaming from "../../icons/gaming.svg";

import Menu from "../../icons/menu.svg";
import Messenger from "../../icons/messenger.svg";
import Notififaction from "../../icons/notification.svg";
import Avatar from "../../icons/avatar.png";
import NavMenu from "./NavMenu/NavMenu";
import NavSection3 from "./NavSection3";
import NavSearch from "./NavSearch";

const Navbar = () => {
	const [hamState, setHamState] = useState(false);
	const [menuState, setMenuState] = useState(false);
	const [searchState, setSeachState] = useState(false);

	const handleMenuEvent = () => {
		setMenuState(!menuState);
		hamState && setHamState(false);
		searchState && setSeachState(false);
	};
	const navItems = [
		{
			icon: Home,
			href: "#",
			tooltip: "Home",
		},
		{
			icon: Watch,
			href: "#",
			tooltip: "Watch",
		},
		{
			icon: MarketPlace,
			href: "#",
			tooltip: "Market Place",
		},
		{
			icon: Groups,
			href: "#",
			tooltip: "Groups",
		},
		{
			icon: Gaming,
			href: "#",
			tooltip: "Gaming",
		},
	];

	return (
		<div className="bg-gray-4 h-16 flex items-center justify-between px-2 lg:px-5">
			{/* section 1 starts */}
			<div className="flex gap-2 lg:gap-3">
				<img src={Logo} alt="" />
				<div
					onClick={() => {
						hamState && setHamState(false);
						menuState && setMenuState(false);
						setSeachState(!searchState);
					}}
					className="grid place-content-center bg-gray-3 w-11 h-11 lg:w-6 rounded-full lg:hidden"
				>
					<img src={Search} alt="" />
				</div>
				<div className="hidden lg:block">
					<NavSearch />
				</div>
				{/* hamburger start */}
				<div className="lg:hidden grid place-content-center w-11 h-11 hover:bg-gray-3 rounded-3xl cursor-pointer">
					<img
						src={Hamburger}
						alt=""
						onClick={() => {
							menuState && setMenuState(false);
							searchState && setSeachState(false);
							setHamState(!hamState);
						}}
					/>
				</div>
				{/* hamburger end */}
			</div>
			{/* section 1 ends */}


			{/* dropDOwn starts */}
			<div
				className={`lg:hidden absolute top-16 rounded-lg pb-2 duration-500 ${
					hamState ? "left-2 opacity-100" : "-left-96 opacity-0"
				} bg-gray-3 w-60`}
			>
				{navItems.map(({ icon, href, tooltip }) => (
					<a
						href={href}
						className="flex justify-start items-center w-full h-16 bg-transparent border-b-2 pl-4 text-gray-1 gap-3 border-gray-2 hover:border-b-4 hover:border-blue-700 duration-500"
					>
						<img src={icon} alt="" />
						<p>{tooltip} </p>
					</a>
				))}
			</div>

			{/* search dropDOwn start*/}
			<div
				className={`lg:hidden absolute top-16 px-3 py-5 rounded-lg border-2 border-solid border-gray-2 duration-500 ${
					searchState ? "left-2 opacity-100" : "-left-96 opacity-0"
				} bg-gray-4 w-auto`}
			>
				<NavSearch />
			</div>
			{/* dropDOwn end*/}

			{/* section 2 Start*/}
			<div className="hidden lg:flex">
				{navItems.map(({ icon, href, tooltip }) => (
					<a
						href={href}
						className="w-28 h-16 bg-transparent border-b-4 border-transparent hover:border-b-4 hover:border-blue-700 duration-500 flex justify-center items-center"
					>
						<img src={icon} alt="" />
					</a>
				))}
			</div>
			{/* section 2 end*/}


			<div className="flex gap-2">
				<NavSection3
					imgSrc={Menu}
					tooltip="menu"
					eventHandler={handleMenuEvent}
				/>
				<NavSection3 imgSrc={Messenger} tooltip="messenger" />
				<NavSection3 imgSrc={Notififaction} tooltip="notification" />
				<NavSection3 imgSrc={Avatar} tooltip="avatar" />

				<div
					className={`absolute top-16 duration-500  ${
						menuState ? "w-full md:w-2/3 lg:w-2/4" : "w-0 h-0"
					} right-0 lg:right-3 rounded-lg overflow-hidden`}
				>
					<NavMenu />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
