# DevLink

DevLink is a monorepo application that consists of a backend and client, managed using npm workspaces. This project uses TypeScript, Express.js for the backend, and React for the frontend, along with various modern tools and libraries.

## Quick Run

To quickly run the application in your local environment, follow these steps:

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/eliasemon/Dev-Link.git
cd devlink
```

### 2. Install and Start the Application

Run the following script in the terminal from the root workspace:

```bash
npm run install-build-start
```

This command will install the necessary dependencies, build the application, and start the server in one go.

### Note on Environment Variables

The main `.env` file has been included in this GitHub repository for convenience. While it's not considered a best practice to include sensitive information in version control, this has been done for specific reasons related to ease of setup. Therefore, you won't need to manually set up the environment variables for a limited time. However, it's recommended to create your own `.env` file with secure values

## Application Overview

The DevLinks application empowers users to manage their online presence efficiently through a comprehensive CRUD functionality for links. It includes robust validation checks to ensure that submitted links are valid and properly formatted for each platform, enhancing data integrity. Users can easily reorder links using drag-and-drop functionality, allowing for personalized organization. They can enrich their profiles with essential details like a profile picture, first name, last name, and email, with immediate feedback for incomplete information. Additionally, users can preview their profiles in real-time and conveniently copy their profile link to share with others. The application features a responsive design that adapts to various device screen sizes, ensuring an optimal user experience across all platforms.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [CLient](#client)
- [Backend](#backend)
- [Contributing](#contributing)
- [License](#license)

## Features

- Backend powered by Express.js
- Client built with React
- TypeScript for static type checking
- Linting and formatting with ESLint and Prettier
- Concurrently run backend and client in development mode
- Husky for Git hooks and lint-staged for pre-commit checks
- Semantic Release for automated versioning and changelogs

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/eliasemon/Dev-Link.git
   cd devlink
   ```

2. **Install dependencies:**

   Run the following command to install all dependencies across workspaces:

   ```bash
   npm install --frozen-lockfile
   ```

## Environment Variables

To ensure the proper functioning of both the backend and client applications, set the following environment variables in your `.env` file located at the root of your workspace. These variables are essential for configuration settings, including database connections, authentication, and API keys.

### Follow more

- [Client_Environment_Variable_Setup](#client_environment_variable)
- [Backend_Environment_Variables_Setup](#environment_variables_backend)

### Required Environment Variables

**Backend:**

- `PORT=3000`
- `DATABASE_URL='mongodb://<user:password>@url/'`
- `JWT_SECRET="randomText"`
- `FIREBASE_PROJECT_ID="firebase project id"`
- `FIREBASE_CLIENT_EMAIL="firebase client email"`
- `FIREBASE_STORAGE_BUCKET="chat-application-4cc10.appspot.com"`
- `CLIENT_ID="your client id"`
- `UNIVERSE_DOMAIN='googleapis.com'`
- `FIREBASE_PRIVATE_KEY="<your firebase private key>"`

**Client:**

- `VITE_CLIENT_URL=http://<your-client-host-url>`
- `VITE_API_URL=http://<your-back-end-api-url>`

### .env.example

A `.env.example` file is provided in the root workspace with placeholder values. Replace these with your actual configuration before creating your `.env` file.

### Loading Environment Variables

The application will automatically load the environment variables from the `.env` file using the dotenv package. Ensure you create a `.env` file based on the `.env.example` template before running the application.

### Note

When building the client application in conjunction with the backend using the root `package.json` file, do **not** include the client environment variables. The client will automatically utilize the backend host URL.

## Usage

### Install, Build, and Start the Application

You can also install all dependencies, build the project, and start the backend server with a single command:

```bash
npm run install-build-start
```

### Running the Application

To start the development server for both backend and client, use the following command:

```bash
npm run workspace:setup && npm run dev
```

This command runs the backend and client concurrently.

### Building the Application

To build the application for production, run:

```bash
npm run build
```

This command will build both the backend and client.

### Starting the application after build

To start the application, you can run:

```bash
npm run start
```

## Scripts

Here’s a brief overview of the available scripts:

- `workspace:setup`: Set up workspace by installing dependencies and preparing Husky.
- `dep:install`: Install dependencies in the current workspace.
- `prepare`: Prepare Husky for Git hooks.
- `dev`: Run both backend and client in development mode.
- `dev:backend`: Run only the backend in development mode.
- `dev:client`: Run only the client in development mode.
- `build`: Build both backend and client for production.
- `build:backend`: Build only the backend.
- `build:client`: Build only the client.
- `start`: Start the backend server.
- `install-build-start`: Install dependencies, build the project, and start the backend server.

# Client

```
/
├── client
```

## Overview

This client application empowers users to manage their online presence efficiently through a comprehensive CRUD functionality for links. It includes robust validation checks to ensure that submitted links are valid and properly formatted for each platform, enhancing data integrity. Users can easily reorder links using drag-and-drop functionality, allowing for personalized organization. They can enrich their profiles with essential details like a profile picture, first name, last name, and email, with immediate feedback for incomplete information. Additionally, users can preview their profiles in real-time and conveniently copy their profile link to share with others. The application features a responsive design that adapts to various device screen sizes, ensuring an optimal user experience across all platforms.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router DOM**: Used for routing between pages.
- **React Hook Form**: For handling form state and validation.
- **Valibot**: For schema validation.
- **Dnd Kit**: For drag-and-drop functionality.
- **Tailwind CSS**: For styling and responsive design.
- **Vite**: A build tool for faster development.

## Directory Structure

The application's source code is organized under the `src` folder, which contains the following structure:

```
src/
├── components/              # Contains reusable components
│   ├── ComponentA.tsx
│   ├── ComponentB.tsx
│   └── ...
├── pages/                   # Contains application pages
│   ├── Auth                 # Authentication page
│   ├── CustomizeLinks       # Page for customizing links
│   ├── PreviewLinks         # Page for previewing links
│   ├── Profile              # User profile page
│   └── NotFound             # 404 Not Found page
├── App.tsx                  # Main application component combining all pages and components
└── main.tsx                 # Entry point of the application
```

## Features

- **CRUD Functionality**: Create, Read, Update, and Delete links.
- **Form Validation**: Ensures that all submitted links are valid and formatted correctly.
- **Drag-and-Drop**: Users can reorder links easily for personalized organization.
- **Profile Management**: Users can add a profile picture, first name, last name, and email, with immediate feedback for incomplete information.
- **Real-Time Preview**: Users can preview their profiles in real-time.
- **Responsive Design**: Adapts to various device screen sizes for optimal user experience.

## Client_environment_variable

To set up the client environment, you need to define two environment variables:

- `VITE_CLIENT_URL`: This should be set to your client host URL. For example:

  ```bash
  VITE_CLIENT_URL=http://<your-client-host-url>
  ```

- `VITE_API_URL`: This should be set to your backend API URL. For example:
  ```bash
  VITE_API_URL=http://<your-back-end-api-url>
  ```

If these environment variables are not provided, they will default to `undefined`. Make sure to set these variables while developing or deploying the client application, as the client is separate from the backend.

When building the client application in conjunction with the backend (using the root `package.json` file), do **not** include these environment variables. The client application will automatically take the backend host URL.

# Backend

## Overview

This backend application is built using Node.js and Express, leveraging TypeScript for type safety and improved development experience. It is structured to support modular development through a clear directory layout and utilizes various middleware and logging mechanisms to ensure robust operation.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Fast and minimal web framework for Node.js.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Winston & Morgan**: Logging libraries for recording application activity.
- **Mongoose**: ODM library for MongoDB, providing schema-based solutions.
- **JWT**: For secure authentication and authorization.

## Directory Structure

```
/src
  ├── api
  │   ├── [route-folder-1]
  │   │   └── routes.ts
  │   ├── [route-folder-2]
  │   │   └── routes.ts
  │   └── middleware.ts
  │   └── ...
  ├── db
  │   ├── models
  │   └── connection.ts
  ├── lib
  ├── middlewares
  │   ├── requestIdGenerator.ts
  │   └── middleware.ts
  ├── types
  ├── utils
  │   └── addRoutesFromFolders.ts
  ├── app.ts
  └── index.ts
```

### Directory Details

- **src/**: Contains all the source code for the application.
- **api/**: Holds folders for each route in the application. Each folder contains a `routes.ts` file, which is automatically registered with the Express router via the mechanism defined in `addRoutesFromFolders.ts`.

- **db/**: Contains database-related code, including models and the database connection logic.

- **lib/**: A directory for library functions and utilities that are not specific to a particular part of the application.

- **middlewares/**: Includes custom middleware functions, such as `requestIdGenerator.ts` which adds a unique request ID to each incoming request for better traceability.

- **types/**: Contains TypeScript type definitions to enhance type safety across the application.

- **utils/**: Utility functions that support the application’s functionality. The `addRoutesFromFolders.ts` file implements a folder-based routing mechanism that automatically registers routes and middleware.

- **app.ts**: The main application file that initializes the Express app and sets up middleware and routing.

- **index.ts**: The entry point of the application, responsible for starting the server.

## Middleware and Routing

The application implements a folder-based routing mechanism, where:

- **Routes**: Each `routes.ts` file within the api folders is automatically added to the Express router.
- **Middleware**: Each `middleware.ts` file in the api folder is also automatically registered, allowing for a modular and scalable approach to handling requests.

### Logging

- **Winston**: Used for application logging, configured to rotate log files daily.
- **Morgan**: Provides HTTP request logging, useful for monitoring incoming requests to the application.

## Global Middleware

The `requestIdGenerator` middleware is implemented globally, ensuring that every request gets a unique identifier, which can be useful for tracking and debugging.

Here’s a section for your `README.md` that describes the environment variables:

## Environment_variables_backend

The backend application requires several environment variables to function properly. These variables are crucial for configuration settings, including database connections, authentication, and API keys. Without these environment variables, the application will not run correctly.

### Required Environment Variables

The following environment variables must be set in your `.env` file:

```
  PORT=3000
  DATABASE_URL='mongodb://<user:password>@url/'
  JWT_SECRET="randomText"
  Firebase_Project_Id="firebase project id"
  Firebase_Client_Email="firebase client email"
  Firebase_Storage_Bucket="chat-application-4cc10.appspot.com"
  Client_Id="your client id"
  Universe_Domain='googleapis.com'
  Firebase_Private_key="<your firebase private key>"
```

### .env.example

To help you set up your environment variables, a `.env.example` file is provided in the root of the workspace. This file contains placeholder values that you should replace with your actual configuration.

### Loading Environment Variables

The application will automatically load the environment variables from the `.env` file located in the root workspace or it's native workspace using the `dotenv` package. Make sure to create a `.env` file based on the `.env.example` template before running the application.

## Contributing

Contributions are welcome! Please create a pull request with a clear description of your changes.

## License

This project is licensed under the ISC License.
