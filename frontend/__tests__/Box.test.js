import React from 'react';
import { shallow } from 'enzyme';
import { Box } from 'rebass'

describe('Component <Box/>', () => {
    it('should render without throwing an error', () => {
      const component = shallow(<BoxPurple />);
      expect(component.contains(<Box
        p={5}
        fontSize={4}
        width={[ 1, 1, 1/2 ]}
        color='white'
        bg='primary'>
        Box
      </Box>)).toBe(true);
    });
  });
  