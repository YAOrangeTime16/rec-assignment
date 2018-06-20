import React from 'react';
import { configure, shallow } from 'enzyme';
import App from './App';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<App />', ()=>{
  const wrapper = shallow(<App />);
  it('renders the component without crashing', ()=>{
    expect(wrapper.length).toEqual(1)
  });
});


