# Warehouse Layout Application

This project is a web application that allows users to define the layout of a warehouse by creating zones and adding shelves to these zones. It is built using Next.js with TypeScript.

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/warehouse-layout.git
   cd warehouse-layout
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

Running Tests
To run the tests, use:

```bash
npm run test
```
Linting and Formatting
To lint the code, use:

```bash
Copy code
npm run lint
To format the code with Prettier, use:

```bash
npm run format
```

Project Structure

warehouse-layout/
├── __tests__/                  # Test files
├── .husky/                     # Husky configuration for Git hooks
├── .next/                      # Next.js build output
├── .vscode/                    # VSCode settings
├── node_modules/               # Node.js modules
├── public/                     # Public assets
├── src/
│   ├── components/
│   │   └── WarehouseForm.tsx   # Main form component for the warehouse layout
│   ├── graphql/
│   │   ├── resolvers/
│   │   │   └── resolvers.ts    # GraphQL resolvers
│   │   ├── schema/
│   │   │   ├── server.ts       # Apollo Server setup
│   │   │   └── typeDefs.ts     # GraphQL type definitions
│   ├── pages/
│   │   ├── api/
│   │   │   └── graphql.ts      # GraphQL API route
│   │   ├── _app.tsx            # Custom App component for Next.js
│   │   └── index.tsx           # Home page
│   ├── styles/
│   │   ├── globals.css         # Global CSS styles
│   │   └── tailwind.css        # Tailwind CSS styles
│   ├── utils/
│   │   ├── api.ts              # API utility functions
│   │   └── logger.ts           # Logger utility
├── .babelrc                    # Babel configuration
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore file
├── .prettierignore             # Prettier ignore file
├── .prettierrc                 # Prettier configuration
├── global.d.ts                 # Global TypeScript declarations
├── jest.config.ts              # Jest configuration
├── jest.setup.ts               # Jest setup file
├── next-env.d.ts               # Next.js environment types
├── next.config.mjs             # Next.js configuration
├── package-lock.json           # NPM lock file
├── package.json                # NPM package file
├── postcss.config.js           # PostCSS configuration
├── postcss.config.mjs          # PostCSS configuration (alternative format)
├── README.md                   # Project documentation
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── warehouse-layout@0.1.0      # Project version

Tools Used:
Next.js: React framework for server-side rendering and static site generation.
TypeScript: Typed superset of JavaScript that compiles to plain JavaScript.
Apollo Server: GraphQL server implementation for Node.js.
GraphQL: Query language for APIs and a runtime for executing those queries.
Tailwind CSS: Utility-first CSS framework for rapid UI development.
Jest: JavaScript testing framework.
ESLint: Pluggable linting utility for JavaScript and TypeScript.
Prettier: Code formatter to ensure consistent style.
Husky: Git hooks to lint and test code before commits.
PostCSS: Tool for transforming CSS with JavaScript plugins.
```
