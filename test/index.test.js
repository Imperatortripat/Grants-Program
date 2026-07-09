import React from 'react';
import {render, screen} from '@testing-library/react';
import Home from '../src/pages/index';

describe('Home page', () => {
  it('passes the site title to the Layout', () => {
    render(<Home />);
    const layout = screen.getByTestId('layout');
    expect(layout).toHaveAttribute(
      'data-title',
      'Web3 Foundation Grants Program',
    );
  });

  it('renders the hero banner with the site title and tagline', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', {name: /Web3 Foundation Grants Program/i}),
    ).toBeInTheDocument();
    expect(screen.getByText('Test tagline')).toBeInTheDocument();
  });

  it('renders an Apply call-to-action linking to the how-to-apply page', () => {
    render(<Home />);
    const apply = screen.getByRole('link', {name: /apply/i});
    expect(apply).toHaveAttribute('href', './Process/how-to-apply');
  });

  it('renders the HomepageFeatures statistics within the page', () => {
    render(<Home />);
    // A value sourced from HomepageFeatures confirms it is mounted here.
    expect(screen.getByText('projects funded')).toBeInTheDocument();
  });
});
