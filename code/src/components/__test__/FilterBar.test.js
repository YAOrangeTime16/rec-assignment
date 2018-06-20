import React from 'react';
import { configure, shallow } from 'enzyme';
import FilterBar from '../FilterBar';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<FilterBar />', ()=>{
  
  it('renders the component without crashing', ()=>{
    const wrapper = shallow(<FilterBar />);
    expect(wrapper.length).toEqual(1)
  });
});