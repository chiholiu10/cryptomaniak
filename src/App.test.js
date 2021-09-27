import { mount } from 'enzyme';
import { App } from './App';

test('renders App component', () => {
  const appComponent = mount(<App />);
  expect(appComponent).toHaveLength(1);
});
