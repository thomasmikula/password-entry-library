# Password Entry Library

A React-based password entry component built with Vite, TypeScript, Tailwind CSS, and react-hook-form. This library provides a robust and modular password validation form that enforces strong password requirements and offers clear, actionable feedback to users.

## Features

- **Two-Factor Password Entry:** Users must input the password twice to ensure accuracy.
- **Validation Rules:**
  - Minimum length of 6 characters.
  - At least one uppercase letter.
  - At least one lowercase letter.
  - At least one numeric digit.
  - At least one special character from the set `!@#$%^&*()_-+={[}]|:;"'<,>.)`.
- **User Feedback:** Displays detailed error messages for each validation rule that fails.

## Tech Stack

- **React**
- **Vite**
- **TypeScript**
- **Tailwind CSS**
- **react-hook-form**

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (version 14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Commands

- Run `npm install` to install dependencies.
- Run `npm run dev` to run the development server.
