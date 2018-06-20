import React from 'react';
import { configure, shallow } from 'enzyme';
import Lobby from '../Lobby';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<Lobby />', ()=>{
  
  it('renders the component without crashing', ()=>{
    const wrapper = shallow(<Lobby />);
    expect(wrapper.length).toEqual(1)
  });
});