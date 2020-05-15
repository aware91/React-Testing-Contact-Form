import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from './ContactForm';

test('render without crashing', () => {
    const container = render(<ContactForm />);
    console.log('aw: ContactForm.test.js: render test: ', container);
})

test('Testing for FirstName field', () => { 
    const { getByTestId } = render(<ContactForm />);
    const expectedFirstName = "Anthony";
    const firstName = getByTestId('firstName');
    fireEvent.change(firstName, {target: {value: 'Anthony'}});
    expect(firstName.value).toBe(expectedFirstName);
})

test('Testing for Last Name field', () => { 
    const { getByTestId } = render(<ContactForm />);
    const expectedLastName = "Ware";
    const lastName = getByTestId('lastName');
    fireEvent.change(lastName, {target: {value: 'Ware'}});
    expect(lastName.value).toBe(expectedLastName);
})

test('Testing for Email field', () => { 
    const { getByTestId } = render(<ContactForm />);
    const expectedEmail = "aware@email.com";
    const email = getByTestId('email');
    fireEvent.change(email, {target: {value: 'aware@email.com'}});
    expect(email.value).toBe(expectedEmail);
})

test('Submit Button', async () => {
    const { getByTestId, findByTestId } = render(<ContactForm />);
    const expectedFirstName = 'John'
    const expectedLastName = 'Doe'
    const expectedEmail = 'jdoe@email.com'
    const firstName = getByTestId('firstName')
    const lastName = getByTestId('lastName')
    const email = getByTestId('email')
    const button = getByTestId('button')
    fireEvent.change(firstName, {target: {value: 'John'}})
    fireEvent.change(lastName, {target: {value: 'Doe'}})
    fireEvent.change(email, {target: {value: 'jdoe@email.com'}})
    fireEvent.click(button)
    expect(firstName.value).toBe(expectedFirstName);
    expect(lastName.value).toBe(expectedLastName);
    expect(email.value).toBe(expectedEmail);
})