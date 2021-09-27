import { FC, useMemo, useState } from "react";
import { TableContent } from "../../../data/table";
import { Table } from "../Table/Table";
import { TableDropdownFilter } from "../TableFilter/TableDropdownFilter";
import { TableDropdownComponent, TableDropdownText } from "./TableComponent.styles";

interface TableComponentProps {
    columns: Array<any>;
}

export const TableComponent: FC<TableComponentProps> = ({ columns }) => {
    const [hiddenCol1, setHiddenCol1] = useState<string>("");
    const [hiddenCol2, setHiddenCol2] = useState<string>("");
    const data = useMemo(() => TableContent, []);

    return (
        <div>
            <TableDropdownComponent>
                <TableDropdownFilter
                    columns={columns}
                    onSelect={setHiddenCol1}
                    filter={hiddenCol2}
                />
                <TableDropdownText>to</TableDropdownText>
                <TableDropdownFilter
                    columns={columns}
                    onSelect={setHiddenCol2}
                    filter={hiddenCol1}
                />
            </TableDropdownComponent>
            <Table
                columns={columns}
                data={data}
                hiddenColumnsOne={hiddenCol1}
                hiddenColumnsTwo={hiddenCol2}
            />
        </div>
    )
}