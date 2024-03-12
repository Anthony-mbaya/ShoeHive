 /** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./public/index.html",
	],
	theme: {
		extend: {
			backgroundImage: theme => ({
			'b-image': "url('https://media.centrepointstores.com/i/centrepoint/HZ22086W-WHITE-HZ22086W-SX290922_03-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-m-prt-pdp-2x$')"
		  })
		},
	},
	plugins: [],
};
