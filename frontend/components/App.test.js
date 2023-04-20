// Write your tests here
import React from 'react';
import {render, screen, waitFor, userEvent} from '@testing-library/react';



import AppClass from './AppClass';

test('renders Error Message if the user clicks the up button past the 2nd index of the grid', async () => {
  render(<AppClass/>); 
  const up = screen.findByTestId("up");
  userEvent.click(up);
  userEvent.click(up);

 
  const eMessage = await screen.findByText(/you cant go up/i);
  expect(eMessage).toBeInTheDocument();
  
});

test('renders ', async () => {
  
})

test('sanity', () => {
  expect(true).toBe(false)
})
