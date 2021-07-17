
import React from 'react';
import Button from '.';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('<Button />', () => {
  test('renders correctly', () => {
    render(<Button>{'Test'}</Button>)
    expect(screen.getByText('Test')).toBeVisible()
  });
});