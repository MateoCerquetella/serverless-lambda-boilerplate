# Serverless Lambda Boilerplate with Prisma

Welcome to the Serverless Lambda Boilerplate! This project is designed to streamline the development of serverless applications using AWS Lambda and Prisma. It's built with TypeScript and includes setup for local development and deployment scripts to get you started quickly.

## Features

- **Serverless Framework**: Configure and deploy AWS Lambda functions easily.
- **Prisma ORM**: Robust database management and schema migration support.
- **TypeScript**: Strongly typed codebase for reliability and maintainability.
- **Local Development**: Local server simulation for easy development and testing.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (LTS version recommended)
- AWS CLI configured with appropriate permissions
- Serverless CLI (`npm install -g serverless`)

### Installing

Clone the repository:

```bash
git clone https://github.com/MateoCerquetella/serverless-lambda-boilerplate.git
cd serverless-lambda-boilerplate
```

Install dependencies:

```bash
npm install
```

Setup environment variables:

Create a `.env` file in the root of your project and update it with your environment-specific details:

```plaintext
DATABASE_URL="your-database-url"
CORS_ALLOW_ORIGIN_1="http://localhost:3000"
AWS_ACCESS_KEY_ID="your-aws-access-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret-key"
REGION="your-aws-region"
```

Generate Prisma client:

```bash
npm run prisma:generate
```

### Prisma Migrations

Prisma Migrations allow you to reliably evolve your database schema with ease. These migrations are version-controlled schema changes, which can be applied in a staging or production environment in a predictable way.

#### Initial Setup and First Migration

To set up your database and create your first migration, follow these steps:

1. **Set Database URL**: Ensure that your `.env` file contains the correct `DATABASE_URL`. This URL should point to your database, where Prisma will manage the schema migrations.

   Example `.env` entry:

   ```plaintext
   DATABASE_URL="postgresql://username:password@localhost:5432/mydb"
   ```

2. **Create the First Migration**: Run the following command to create your first migration. The migration will include the initial schema setup based on your current Prisma schema.

   ```bash
   npm run prisma:migration:new -- --name first_migration
   ```

   This command will generate SQL migration files within the `prisma/migrations` directory, which describe the steps necessary to reach your desired schema state.

#### Applying Migrations

To apply migrations to your database:

```bash
npm run prisma:migration:deploy
```

This command will apply all pending migrations in the order they were created to the database specified in your `DATABASE_URL`. It's a safe way to update your database schema as part of your deployment process.

#### Creating Subsequent Migrations

Whenever you make changes to your Prisma schema file (`schema.prisma`), you will need to generate a new migration. These migrations capture incremental changes to your database schema.

To create a new migration after updating your schema:

```bash
npm run prisma:migration:new -- --name descriptive_migration_name
```

This will generate a new set of migration files reflecting changes since the last migration, ensuring that your schema changes are version-controlled and deployable.

### Running Locally

To start the local development server:

```bash
npm run dev
```

This will start the Serverless Offline plugin, simulating AWS Lambda and API Gateway on your local machine.

## Deployment

To deploy your application to AWS:

```bash
npm run deploy:dev
```

This script will set up your environment, generate the necessary Prisma client, and deploy your application to AWS using the development stage configuration.

## Structure Overview

Here's a brief overview of the main components of this boilerplate:

- `src/api/users`: Contains user-related controllers, services, and validators.
- `src/core`: Core functionalities including middleware and HTTP models.
- `src/prisma`: Prisma service and schema for ORM.
- `_templates`: Hygen templates for quickly generating new modules.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'')
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Mateo Cerquetella
