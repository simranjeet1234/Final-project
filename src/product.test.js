import React from 'react';
import {configure,shallow} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Products from '../src/component/products/products';
import ProductList from '../src/component/productList/productList';


configure({adapter: new Adapter()});

describe('<ProductList/>',() => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ProductList />)
    });
    it('shouls render <Products/> after recieving the products', () => {
        expect(wrapper.find(Products));
    });
});