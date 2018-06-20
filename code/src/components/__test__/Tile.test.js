import React from 'react';
import { configure, shallow } from 'enzyme';
import Tile from '../Tile';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<Tile />', ()=>{
  
  it('renders the component without crashing', ()=>{
    const wrapper = shallow(<Tile />);
    expect(wrapper.length).toEqual(1)
  });
});