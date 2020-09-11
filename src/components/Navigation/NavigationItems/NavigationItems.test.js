import React from 'react'

import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'

configure({adapter: new Adapter()});


describe('<NavigationItems />', () => {
    it('yaha 2 render hona chahiye!!', () => {
        const wrapper = shallow(<NavigationItems />)
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('yaha 3 render hona chahiye!!', () => {
        const wrapper = shallow(<NavigationItems isAuthenticated/>)
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });
})