/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Reference: https://nextjs.org/docs/app/building-your-application/configuring/eslint#linting-custom-directories-and-files
        // Include cypress in the default list of directories.
        dirs: ["pages", "app", "components", "lib", "src", "cypress"],
    },
};

module.exports = nextConfig;
