/**
 * ESLint configuration for Next.js project
 * 
 * This file configures ESLint using the new flat config format introduced in ESLint v8.21.0
 * See https://eslint.org/docs/latest/use/configure/configuration-files-new
 */

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Convert ESM module paths to CommonJS-like variables for compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * FlatCompat provides compatibility with older ESLint configs
 * This allows us to use the Next.js ESLint configurations which
 * haven't yet been updated to the new flat config format
 */
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/**
 * ESLint configuration array
 * 
 * Extends:
 * - next/core-web-vitals: Enforces good practices for web performance metrics
 * - next/typescript: Adds TypeScript-specific rules for Next.js projects
 */
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
