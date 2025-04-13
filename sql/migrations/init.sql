CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    current_market_price DECIMAL(10, 2) NOT NULL,
    size_availability JSONB NOT NULL,
    description TEXT,
    brand_name VARCHAR(100),
    product_details TEXT,
    product_images JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);