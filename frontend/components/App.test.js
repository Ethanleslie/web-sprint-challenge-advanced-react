// Write your tests here
import React from 'react';
import {render, screen, waitFor, userEvent} from '@testing-library/react';



import AppClass from './AppClass';

// test('renders Error Message if the user clicks the up button past the 2nd index of the grid', async () => {
//   render(<AppClass/>); 
//   const up = screen.findByTestId('up');
//   userEvent.click(up);
//   userEvent.click(up);

 
//   const eMessage = await screen.findByText(/you cant go up/i);
//   expect(eMessage).toBeInTheDocument();
  
// });

// test('renders, must be a valid email if invalid email is submitted', async () => {
//   render(<AppClass/>)
//   const emailField = screen.getByLabelText(/email/i);
//   userEvent.type(emailField, "email@");
//   const submit = screen.findByTestId('submit')
//   userEvent.click(submit)

//   const errorMessages = await screen.findByText(/Ouch: email must be a valid email/)
//   expect(errorMessages).toBeInTheDocument()
// })

// test('renders error message', async () => {
//   render(<AppClass/>)
//   const submitButton = screen.getByRole("submit");
//   userEvent.click(submitButton)

//   await waitFor(() => {
//     const errorMessages = screen.queryByTestId("eMessage");
//     expect(errorMessages).toHaveLength(1)
//   })
// })

// test('sanity', () => {
//   expect(true).toBe(true)
// })
