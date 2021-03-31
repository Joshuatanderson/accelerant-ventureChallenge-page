import { render, screen } from '@testing-library/react';
import App from './App';

test('renders accelerant name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Accelerant/i);
  expect(linkElement).toBeInTheDocument();
});
