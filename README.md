# Web Scraping Application

This project is a web scraping application that extracts product data from StockX based on user-provided URLs. It consists of a backend service that handles scraping and a frontend interface for user interaction.

## Project Structure

```
web-scraping-app
├── backend              # Backend service for scraping
│   ├── src
│   │   ├── app.ts      # Entry point for the backend application
│   │   ├── services     # Contains scraping logic
│   │   ├── controllers   # Handles incoming requests
│   │   ├── routes        # Defines API routes
│   │   └── db           # Database connection and methods
│   ├── package.json     # Backend dependencies and scripts
│   ├── tsconfig.json    # TypeScript configuration for backend
│   └── README.md        # Documentation for the backend
├── frontend             # Frontend interface for user interaction
│   ├── src
│   │   ├── components    # Reusable components for the UI
│   │   ├── pages         # Main pages of the application
│   │   ├── styles        # CSS styles using Tailwind
│   │   └── utils         # Utility functions for API calls
│   ├── package.json      # Frontend dependencies and scripts
│   ├── tsconfig.json     # TypeScript configuration for frontend
│   └── README.md         # Documentation for the frontend
├── graphql              # GraphQL API definitions and resolvers
│   ├── schema.graphql    # GraphQL schema definition
│   └── resolvers         # Resolvers for the GraphQL API
├── sql                  # SQL database migrations
│   └── migrations        # SQL scripts for initializing the database
└── README.md            # Overall documentation for the project
```

## Features

- Scrapes product data from StockX including:
  - Product name
  - Current market price
  - Size availability
  - Description
  - Brand name
  - Product details
  - Product images

- User-friendly frontend with:
  - URL input field
  - Submit button
  - Loading state indicator
  - Error handling display
  - Results table with sorting and filtering
  - Export functionality (CSV/JSON)
  - Responsive design

- Backend functionalities:
  - GraphQL and REST APIs
  - SQL database for data persistence
  - Error handling and retry mechanisms in scraping service

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend and frontend directories and install dependencies:
   ```
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Set up the database by running the SQL migration scripts located in the `sql/migrations` directory.

4. Start the backend server:
   ```
   cd backend
   npm start
   ```

5. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.#   S t o c k X - s c r a p e r 
 
 
