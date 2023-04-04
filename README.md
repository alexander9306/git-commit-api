# Git Commit History App

This is a monorepo project that contains a NestJS backend application and a Next.js frontend application. The shared directory contains code that can be shared between the two applications, such as common libraries or utilities.

## Folder Structure

```bash
- api/        # NestJS backend
- front/      # Next.js frontend
- shared/     # Shared code between the applications
```

## Installation

This monorepo project uses pnpm as its package manager. To install **pnpm**, please follow the instructions provided [here](https://pnpm.io/installation).

After cloning the project, run the following command in the root directory:

```bash
pnpm recursive install
```

This will install the necessary dependencies for both the backend and frontend applications.

## Running the Applications

To start both applications, run the following command in the root directory:

```bash
pnpm recursive run dev
```

This will start both the NestJS backend and Next.js frontend in development mode.

Please note that you can also run each application separately by navigating to its directory and running **`pnpm run dev`**.

## Default Ports

By default, the NestJS backend application runs on port **`3000`** and the Next.js frontend application runs on port **`8080`**. Please ensure that these ports are available when running the applications.

If you wish to change the default ports, you can do so by modifying the respective application's configuration file. For the NestJS backend, you can modify the **`src/main.ts`** file, and for the Next.js frontend, you can modify the next.config.js file.

Note that if you change the default ports, you will need to update any URLs or requests that reference the applications accordingly.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
