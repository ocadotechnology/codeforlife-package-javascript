import { render, screen } from '@testing-library/react';
import App from './App';

// test
test('renders paragraph', () => {
  render(<App />);
  const pElement = screen.getByText(/component library/i);
  expect(pElement).toBeInTheDocument();
});
