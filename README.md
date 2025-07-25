# Next.js Base Template

A modern, feature-rich Next.js starter template with TypeScript, ESLint, Prettier, Stylelint, and Husky pre-configured. This template provides a solid foundation for building scalable, maintainable Next.js applications with best practices baked in.

## Features

- **Next.js 15.4.4** - The latest version of Next.js with App Router
- **React 19.1.0** - The latest version of React
- **TypeScript** - Type safety and improved developer experience
- **Turbopack** - Faster development builds
- **CSS Modules** - Component-scoped CSS with type safety
- **Responsive Design** - Mobile-first responsive layouts
- **Code Quality Tools**:
  - ESLint - JavaScript/TypeScript linting
  - Prettier - Code formatting
  - Stylelint - CSS linting
  - Husky - Git hooks for code quality
  - lint-staged - Run linters on git staged files
- **Conventional Commits** - Enforced commit message format
- **Import Sorting** - Automatic import organization
- **Path Aliases** - Clean imports with `@/*` paths

## Requirements

- Node.js 24 or later
- npm, yarn, pnpm, or bun

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://your-repository-url/next-base.git my-project
cd my-project

# Install dependencies
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

### Development

Start the development server with Turbopack for faster builds:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
next-base/
├── .husky/                 # Git hooks configuration
├── public/                 # Static assets
├── src/                    # Source code
│   ├── app/                # App Router components
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout component
│   │   ├── page.module.css # Page-specific styles
│   │   └── page.tsx        # Home page component
├── .eslintrc.json          # ESLint configuration
├── .prettierrc.mjs         # Prettier configuration
├── .stylelintrc.json       # Stylelint configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## Available Scripts

| Command                  | Description                                 |
| ------------------------ | ------------------------------------------- |
| `npm run dev`            | Start the development server with Turbopack |
| `npm run build`          | Build the application for production        |
| `npm run start`          | Start the production server                 |
| `npm run lint`           | Run ESLint to check JavaScript/TypeScript   |
| `npm run lint:all`       | Run both ESLint and Stylelint               |
| `npm run typecheck`      | Run TypeScript type checking                |
| `npm run stylelint`      | Lint CSS files                              |
| `npm run prettier:check` | Check code formatting                       |
| `npm run prettier:write` | Automatically format code                   |
| `npm run validate`       | Run all code quality checks                 |

## Development Workflow

This template enforces a robust development workflow:

1. **Code Quality**: ESLint, Prettier, and Stylelint ensure consistent code style and catch potential issues.
2. **Type Safety**: TypeScript provides type checking to prevent common errors.
3. **Git Hooks**:
   - **pre-commit**: Automatically formats and lints staged files before committing
   - **commit-msg**: Enforces conventional commit message format
   - **pre-push**: Validates code before pushing to remote

### Commit Message Format

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

Types: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`

Example: `feat(auth): add user login endpoint`

## Configuration

### Next.js

The Next.js configuration is in `next.config.ts`:

- React Strict Mode is enabled
- Experimental features can be configured

### TypeScript

TypeScript is configured in `tsconfig.json`:

- Strict type checking
- Path aliases (`@/*` points to `./src/*`)
- Modern module resolution

### ESLint

ESLint is configured in `eslint.config.mjs`:

- Extends Next.js recommended configurations
- TypeScript support

### Prettier

Prettier is configured in `.prettierrc.mjs`:

- 120 character line width
- Single quotes
- 2 space indentation
- Import sorting with `@ianvs/prettier-plugin-sort-imports`

### Stylelint

Stylelint is configured in `.stylelintrc.json`:

- Extends standard configuration
- Enforces camelCase for CSS class names (for CSS Modules)
- Supports CSS Modules `:global` pseudo-class

## Deployment

This project can be deployed on any platform that supports Next.js, such as:

- [Vercel](https://vercel.com/) (recommended)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- Self-hosted with Node.js

## License

This project is licensed under the MIT License - see the LICENSE file for details.
