import React from 'react';
import { shallow, configure } from 'enzyme';
import NavigationItem from './NavigationItem';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Layout/>', () => {
  it('Should render the NavigatiomItem and find a li and Navlink component', () => {
    const layout = shallow(<NavigationItem />);
    expect(layout.find('li'));
    expect(layout.find('Navlink'));
  })
})