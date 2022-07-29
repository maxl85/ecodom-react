/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1128px',
            // '2xl': '1536px',
        },

        extend: {
            colors: {
                main: '#38B44A',
                hover: '#288136',
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
};
