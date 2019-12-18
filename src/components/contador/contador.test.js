import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../store/configure-store';
import Contador from './Contador';

describe('Contador component', () => {
  let wrapper;

  beforeEach(() => {
    const store = configureStore();
    wrapper = mount(<Provider store={store}><Contador /></Provider>);
  })

  it('should render a span element with "Cuenta: 0"', () => {
    const countTxt = wrapper.find('span').text();
    expect(countTxt).toBe('Cuenta: 0');
  })

  it('should increment the count when the increment button is clicked', () => {
    const btnInc = wrapper.find('button#btn-increment').first();
    btnInc.simulate('click');
    const countTxt = wrapper.find('span').first().text();
    expect(countTxt).toBe('Cuenta: 1');
  })
});