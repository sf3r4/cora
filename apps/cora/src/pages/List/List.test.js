import React from 'react';
import { shallow } from 'enzyme';
import Chargers from './Chargers';

describe('Chargers', () => {
  it('should render correctly', () => {
    const component = shallow(<Chargers />);
    expect(component).toMatchSnapshot();
  });
});
