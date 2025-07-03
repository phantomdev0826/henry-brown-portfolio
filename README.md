# Henry Brown Portfolio

A modern, developer-focused portfolio built with Next.js, TypeScript, Tailwind CSS, and OpenAI-powered AI chat.

## Features

- Responsive, accessible, and beautiful UI
- AI chat panel powered by OpenAI
- Modular, reusable components
- Dark mode support

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd henry-brown-portfolio
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Copy `.env.example` to `.env.local` and fill in your OpenAI API key:

```bash
cp .env.example .env.local
```

### 4. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Linting & Formatting

- Run `npm run lint` to check for lint errors.
- Run `npm run format` to auto-format code with Prettier.
- Pre-commit hooks will auto-lint and format staged files.

## Testing

- (Add tests in `__tests__` or alongside components)
- Recommended: [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/)

## Deployment

- Deploy to [Vercel](https://vercel.com/) for best results.
- Set your `OPENAI_API_KEY` in the Vercel dashboard under Project Settings > Environment Variables.

## Contributing

1. Fork the repo
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your fork and open a Pull Request

## License

MIT
