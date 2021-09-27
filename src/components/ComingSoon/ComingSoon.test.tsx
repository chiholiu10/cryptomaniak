import React from 'react';
import { ComingSoon } from './ComingSoon';
import { mount } from 'enzyme';

test('AppComponent running', () => {
    const appComponent = mount(<ComingSoon />);

    expect(appComponent).toHaveLength(1);
});