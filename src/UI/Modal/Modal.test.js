import React from 'react';
import { shallow, configure } from 'enzyme';
import Modal from './Modal';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('<Modal/>', () => {
  it('renders the modal and finds a div', () => {
    const layout = shallow(<Modal show={true}/>);
    expect(layout.find('div').length).toEqual(3);
  })
})