# Web Scraping Application - Backend

This backend service is designed to scrape product data from StockX based on user-provided URLs. It utilizes either Playwright or Selenium for web scraping and provides a robust API for interaction with the frontend.

## Features

- Scrapes product data including:
  - Product name
  - Current market price
  - Size availability
  - Description
  - Brand Name
  - Product details
  - Product images
- Implements error handling and retry mechanisms to ensure reliability.
- Provides a REST API for frontend integration.
- Data persistence using a SQL database.

## Project Structure

- **src/app.ts**: Entry point of the application, initializes the server and sets up middleware.
- **src/services/scrapingService.ts**: Contains methods for scraping product data.
- **src/controllers/scrapingController.ts**: Handles incoming requests related to scraping.
- **src/routes/index.ts**: Defines API routes and links them to controller methods.
- **src/db/database.ts**: Manages database connections and data storage.

## Installation

1. Clone the repository.
2. Navigate to the backend directory.
3. Install dependencies:

   npm install

4. Run the application:

   npm start

## Usage

Send a POST request to the `/scrape` endpoint with a JSON body containing the URL to scrape. The response will include the scraped product data.

## License

This project is licensed under the MIT License.