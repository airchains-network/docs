// tailwind.config.js
module.exports = {
    corePlugins: {
        preflight: false,
    },
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./docs/**/*.{js,jsx,ts,tsx}",
        "./blog/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: ["class", '[data-theme="dark"]'], // Support Docusaurus dark mode
    // ... rest of the configuration
}