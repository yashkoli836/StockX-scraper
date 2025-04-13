import React from 'react';

interface Product {
  name: string;
  marketPrice: number;
  sizeAvailability: string[];
  description: string;
  brandName: string;
  productDetails: string;
  productImages: string[];
}

interface ResultsTableProps {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const ResultsTable: React.FC<ResultsTableProps> = ({ products, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <table className="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Product Name</th>
          <th className="border border-gray-300 p-2">Market Price</th>
          <th className="border border-gray-300 p-2">Size Availability</th>
          <th className="border border-gray-300 p-2">Description</th>
          <th className="border border-gray-300 p-2">Brand Name</th>
          <th className="border border-gray-300 p-2">Product Details</th>
          <th className="border border-gray-300 p-2">Product Images</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td className="border border-gray-300 p-2">{product.name}</td>
            <td className="border border-gray-300 p-2">${product.marketPrice.toFixed(2)}</td>
            <td className="border border-gray-300 p-2">{product.sizeAvailability.join(', ')}</td>
            <td className="border border-gray-300 p-2">{product.description}</td>
            <td className="border border-gray-300 p-2">{product.brandName}</td>
            <td className="border border-gray-300 p-2">{product.productDetails}</td>
            <td className="border border-gray-300 p-2">
              {product.productImages.map((image, imgIndex) => (
                <img key={imgIndex} src={image} alt={product.name} className="w-16 h-16" />
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;