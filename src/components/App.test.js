import React from 'react';
import App from './App';
import Home from './pages/home';
import {shallow} from 'enzyme';

function setup(){
  return shallow(<App ><Home /></App>);
}

describe('components', ()=>{
  describe('App', () =>{
    it('should render a div with class "App"', () =>{
      const enzymeWrapper = setup();

      expect(enzymeWrapper.find('div').hasClass('App')).toBe(true);
    });
  });
});
