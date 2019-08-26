import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'rebass';
import ButtonComp from '../components/Core/Button';

describe('Component <Button/>', () => {
  it('should render without throwing an error', () => {
    const component = shallow(<ButtonComp />);
    expect(component.contains(<Button color="black" bg="primary" mr={2}>Primary</Button>)).toBe(true);
  });
});
