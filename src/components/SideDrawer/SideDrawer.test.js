import React from 'react';
import { shallow, configure } from 'enzyme';
import SideDrawer from './SideDrawer';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('<SideDrawer/>', () => {
  it('renders the Sidedrawer component and finds an ul', () => {
    const layout = shallow(<SideDrawer />);
    expect(layout.find('ul').length).toEqual(1);
  })
})