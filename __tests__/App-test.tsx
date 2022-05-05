/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import 'jest-styled-components';

// Note: test renderer must be required after react-native.
import { render } from '@testing-library/react-native';

describe('App Test', () => {
  it('renders correctly', () => {
    render(<App />);
  });
});
