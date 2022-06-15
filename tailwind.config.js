/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        },
        colors: {
            'theme-primary-1': '#1C1C1C',
            'theme-primary-2':'#232323',
            'theme-secondary-1': '#F7931A',
            'theme-secondary-2': '#FF8F27',
            'theme-secondary-3': '#F3BA2F',
            'theme-secondary-alpha': 'rgba(247, 147, 26, 0.4)',
            'theme-secondary-alpha-2': 'rgba(243, 186, 47, 0.11)',
            'theme-white': '#FFFFFF',
            'theme-white-alpha': 'rgba(255, 255, 255, 0.49)',
            'theme-white-alpha-2': 'rgba(229, 229, 229, 0.1)',
            'theme-white-alpha-3': 'rgba(74, 74, 74, 0.07)',
            'theme-red-1': '#CE0F0F',
            'theme-red-2': '#C8304D',
            'theme-green': '#00A478',
            'theme-gray-1': '#A6A6A6',
            'theme-gray-2': '#CED3DA',
            'theme-gray-3': '#C4C4C4',
            'theme-gray-4': '#C4C4C4',
            'theme-gray-5': '#4A4A4A',
            'theme-gray-6': '#5C5C5C',
            'theme-gray-7': '#E5E5E5',
            'theme-gray-alpha': 'rgba(166, 166, 166, 0.06)',
            'theme-gray-alpha-2': 'rgba(92, 92, 92, 0.7)',
            'theme-black': '#000000',
          },
    },
    plugins: [],
};
