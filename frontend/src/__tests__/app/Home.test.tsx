import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../app/page'; // Adjusted path
import { getProducts } from '../../lib/calls';
import { IProduct } from '@/types';

// Mock the getProducts function
jest.mock('../../lib/calls', () => ({
  getProducts: jest.fn(),
}));

describe('Home Component', () => {
  it('renders the CartIcon and HomeContent with fetched products', async () => {
    // Mock data to be returned by getProducts
    const mockProducts: IProduct[] = [
      { id: 1, name: 'Product 1', description: 'Description 1', price: 100 },
      { id: 2, name: 'Product 2', description: 'Description 2', price: 200 },
    ];

    // Mock implementation of getProducts to return the mock data
    (getProducts as jest.Mock).mockResolvedValue(mockProducts);

    // Render the Home component
    render(await Home());

    // Wait for the HomeContent to be rendered
    waitFor(() => {
      // Assert that the CartIcon is rendered
      expect(screen.getByTestId('cart-icon')).toBeInTheDocument();

      // Assert that the HomeContent is rendered with the mock data
      mockProducts.forEach(product => {
        expect(screen.getByText(product.name)).toBeInTheDocument();
        expect(screen.getByText(product.description)).toBeInTheDocument();
        expect(screen.getByText(`${product.price}$`)).toBeInTheDocument();
      });
    });
  });
});