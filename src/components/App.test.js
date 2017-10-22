import React from 'react';
import App from './App';
import Home from './pages/home';
import {shallow} from 'enzyme';

function setup(){
  const props = {
    openEditName: jest.fn()
  };

  const enzymeWrapper = shallow(<App {...props} ><Home /></App>);

  return {
    props,
    enzymeWrapper
  };
}

describe('components', ()=>{
  describe('App', () =>{
    it('should render without crashing', () =>{
      const {enzymeWrapper} = setup();

      expect(enzymeWrapper.find('div').hasClass('App')).toBe(true);
    });
  });
});
