/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  endOfLine: 'lf',
  printWidth: 120,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    // UI components lib
    '',
    '^types$',
    '^@/types/(.*)$',
    '^@/config/(.*)$',
    '^@/lib/(.*)$',
    '^@/hooks/(.*)$',
    '^@/components/ui/(.*)$',
    '^@/components/(.*)$',
    '^@/styles/(.*)$',
    '^@/app/(.*)$',
    '',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.8.3',
};

export default config;
