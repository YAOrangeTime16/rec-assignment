import React from 'react';
import { configure } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import Header from '../Header';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<Header />', ()=>{
  let shallow = createShallow();
  const wrapper = shallow(<Header />);
  it('renders the component without crashing', ()=>{
    expect(wrapper.length).toEqual(1)
  });
});