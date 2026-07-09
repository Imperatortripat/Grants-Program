import React from 'react';
import {render, screen} from '@testing-library/react';
import HomepageFeatures from '../src/components/HomepageFeatures';

describe('HomepageFeatures', () => {
  it('renders one entry per statistic in the feature list', () => {
    const {container} = render(<HomepageFeatures />);
    // Three columns, one per FeatureList entry.
    expect(container.querySelectorAll('.col.col--4')).toHaveLength(3);
  });

  it('renders each statistic value followed by a "+" sign', () => {
    render(<HomepageFeatures />);
    const counts = document.querySelectorAll('.number--count');
    const texts = Array.from(counts).map((el) => el.textContent);
    expect(texts).toEqual(['1100+', '450+', '50+']);
  });

  it('renders the descriptive label for each statistic', () => {
    render(<HomepageFeatures />);
    expect(screen.getByText('applications')).toBeInTheDocument();
    expect(screen.getByText('projects funded')).toBeInTheDocument();
    expect(screen.getByText('in countries')).toBeInTheDocument();
  });

  it('wraps the statistics in a features section container', () => {
    const {container} = render(<HomepageFeatures />);
    expect(container.querySelector('section')).toBeInTheDocument();
    expect(container.querySelector('.container .row')).toBeInTheDocument();
  });
});
