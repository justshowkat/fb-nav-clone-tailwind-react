/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				gray: {
					1: "#E4E6EB",
					2: "#8D8F93",
					3: "#3A3B3C",
					4: "#242526",
					5: "#18191A",
				},
			},
		},
	},
	plugins: [],
};
