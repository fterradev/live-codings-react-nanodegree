import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

global.localStorage = {
  getItem: () => {}
}

it('renders without crashing', () => {
  expect(shallow(<App />)).toMatchSnapshot();
});
