import React from 'react';
import { shallow, configure } from 'enzyme';
import CardItem from './CardItem';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});
configure({adapter: new Adapter()});

describe('<Layout/>', () => {
  it('Should render the CardItem and find a react-boostrap card and Card.ImgOverlay components', () => {
    const layout = shallow(<Provider store = {store}><CardItem /></Provider>);
    expect(layout.find('Card'));
    expect(layout.find('Card.ImgOverlay'));
  })
})