import { render, screen } from '@testing-library/react';
import { Component } from './component';

describe('testing', () => {
  it('TESTING', () => {
    render(<Component />);
    const cont = screen.getByText('holiii');
    expect(cont).toBeDefined();
  });
})
