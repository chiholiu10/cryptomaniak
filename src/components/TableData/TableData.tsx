import { FC, useMemo } from "react";
import { Table } from "../Table/Table";
import { TableHeaders } from "../../data/columns";
import { TableContent } from "../../data/table";
import { TableContainer } from "./TableData.styles";

export const TableData: FC = () => {
  const columns = useMemo(() => TableHeaders, []);
  const data = useMemo(() => TableContent, []);

  return (
    <TableContainer>
      <Table columns={columns} data={data} />
    </TableContainer>
  );
};
