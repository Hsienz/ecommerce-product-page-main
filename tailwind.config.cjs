/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{tsx,ts,js,jsx}"],
	theme: {
		extend: {
			colors: {
				// Primary

				Orange: "hsl(26, 100%, 55%)",
				Pale_orange: "hsl(25, 100%, 94%)",

				// Neutral

				Very_dark_blue: "hsl(220, 13%, 13%)",
				Dark_grayish_blue: "hsl(219, 9%, 45%)",
				Grayish_blue: "hsl(220, 14%, 75%)",
				Light_grayish_blue: "hsl(223, 64%, 98%)",
				White: "hsl(0, 0%, 100%)",
				Black /*(with 75% opacity for lightbox background) */:
					"hsl(0, 0%, 0%)",
			},
      fontFamily: {
        Kumbh: ['Kumbh Sans', 'sans-serif']
      }
		},
	},
	plugins: [],
};
