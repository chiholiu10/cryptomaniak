import { mount } from 'enzyme';
import { PaymentMethods } from './PaymentMethods';

test('renders App component', () => {
    const appComponent = mount(<PaymentMethods />);
    expect(appComponent).toHaveLength(1);
});
