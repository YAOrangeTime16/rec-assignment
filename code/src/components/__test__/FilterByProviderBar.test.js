import React from 'react';
import { configure, shallow } from 'enzyme';
import FilterByProviderBar from '../FilterByProviderBar';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<FilterByProviderBar />', ()=>{
  
  it('renders the component without crashing', ()=>{
    const wrapper = shallow(<FilterByProviderBar />);
    expect(wrapper.length).toEqual(1)
  });

  it('should render Menu items', ()=>{
    const wrapper = shallow(<FilterByProviderBar />);
    expect(wrapper.find('MenuItem')).toBeTruthy();
  })
});