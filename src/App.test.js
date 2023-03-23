import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  test('renders the table with province data', async () => {
    render(<App />);
    await screen.findByRole('table');
  });

  test('filters the table data by province name', async () => {
    render(<App />);
    const searchInput = screen.getByRole('textbox');

    // Type "San" in the search input
    userEvent.type(searchInput, 'San');

    // Wait for the filtered data to appear
    await screen.findByText('San Luis');

    // Check that only San Luis and San Juan are displayed
    expect(screen.getByText('San Luis')).toBeInTheDocument();
    expect(screen.getByText('San Juan')).toBeInTheDocument();
    expect(screen.queryByText('Buenos Aires')).not.toBeInTheDocument();
  });
});

