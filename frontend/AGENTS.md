---
name: "Bedrock Frontend"
description: "Guidelines for the React + Vite frontend that calls the Bedrock API"
category: "Frontend"
author: "text-to-sql-bedrock-workshop"
tags: ["react", "vite", "frontend", "bedrock"]
---

# Frontend Development Guide

## Overview
This project uses **React 18**, **TypeScript**, and **Vite**. It communicates directly with the Amazon Bedrock Runtime API using the AWS SDK for JavaScript.

## Tech Stack
- React 18 + TypeScript
- Vite build tool
- State management via Zustand
- Styling with Tailwind CSS
- AWS SDK v3 `@aws-sdk/client-bedrock-runtime`
- Testing with Vitest and React Testing Library

## Project Structure
```
frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── store/
│   └── App.tsx
├── package.json
└── vite.config.ts
```

## Guidelines
1. Use function components and Hooks.
2. Provide TypeScript interfaces for component props.
3. Keep components small with a single responsibility.
4. Centralize Bedrock API calls under `src/services` using the AWS SDK.
5. Configure environment variables in `.env.local`.
6. Format code with Prettier and lint with ESLint.

## Setup
```bash
# install dependencies
npm install

# start development server
npm run dev
```

Environment variables example:
```env
VITE_AWS_REGION=us-east-1
VITE_MODEL_ID=amazon.titan-tg1-large
```

## Testing
Run unit tests with:
```bash
npm run test
```
