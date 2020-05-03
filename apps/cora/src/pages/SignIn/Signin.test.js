import React from 'react';
import { shallow } from 'enzyme';
import SignIn from './SignIn';

describe('SignIn', () => {
  it('should render correctly', () => {
    const component = shallow(<SignIn />);
    expect(component).toMatchSnapshot();
  });
});
