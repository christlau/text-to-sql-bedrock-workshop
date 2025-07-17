# Bedrock Frontend

This application was bootstrapped with [Vite](https://vitejs.dev/) and uses React 18 with TypeScript. It directly invokes the Amazon Bedrock Runtime API from the browser.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env.local` file based on `.env.example` and configure your AWS Region and model ID.
   ```env
   VITE_AWS_REGION=us-east-1
   VITE_MODEL_ID=amazon.titan-tg1-large
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Building
To create an optimized build:
```bash
npm run build
```

## Testing
Run unit tests with:
```bash
npm run test
```
