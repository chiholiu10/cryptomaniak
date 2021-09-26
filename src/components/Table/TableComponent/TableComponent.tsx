import { FC, useMemo, useState } from "react";
import { TableContent } from "../../../data/table";
import { Table } from "../Table/Table";
import { TableDropdownFilter } from "../TableFilter/TableDropdownFilter";
// import { TableFilter, TableFilterBlock, TableFilterInput, TableFilterDropdown, TableDropdownList } from "./TableComponent.styles";

interface TableComponentProps {
    columns: Array<any>;
}

export const TableComponent: FC<TableComponentProps> = ({ columns }) => {
    const [hiddenCol, setHiddenCol] = useState<string>("");
    const data = useMemo(() => TableContent, []);

    return (
        <div>
            <TableDropdownFilter
                columns={columns}
                onSelect={setHiddenCol}
            />
            <TableDropdownFilter
                columns={columns}
                onSelect={setHiddenCol}
            />
            <Table columns={columns} data={data} hiddenColumns={hiddenCol} />
        </div>
    )
}