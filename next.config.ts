import type { NextConfig } from 'next';

/**
 * Next.js configuration
 * 
 * This file contains configuration options for the Next.js application.
 * See https://nextjs.org/docs/app/api-reference/next-config-js for all available options.
 */
const nextConfig: NextConfig = {
    /**
     * Enable React Strict Mode for development
     * This helps identify potential problems in the application during development
     * See https://react.dev/reference/react/StrictMode
     */
    reactStrictMode: true,
    
    /**
     * Experimental features configuration
     * These features may change or be removed in future Next.js versions
     */
    experimental: {
        /**
         * Optimize specific package imports to reduce bundle size
         * Add package names to this array to optimize their imports
         * Example: ['@mui/material', '@mui/icons-material']
         */
        optimizePackageImports: [],
    },
};

export default nextConfig;
