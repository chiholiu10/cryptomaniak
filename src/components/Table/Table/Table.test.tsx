import { mount } from 'enzyme';
import { TableHeaders } from '../../../data/columns';
import { TableContent } from '../../../data/table';
import { Table } from './Table';

describe('test MyComponent', () => {
    const wrapper = mount(<Table columns={TableHeaders} data={TableContent} hiddenColumnsOne={''} hiddenColumnsTwo={''} />);
    const table = wrapper.find('table');
    const row = mount(<tr />);

    it('table grid', () => {
        expect(table).toHaveLength(1);
        expect(row).toHaveLength(1);
    });
});
