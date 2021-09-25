import { FC, useMemo } from "react";
import { TableHeaders } from "../../data/columns";
import { TableContent } from "../../data/table";
import { TableContainer } from "./TableData.styles";
import { TableComponent } from "../Table/TableComponent/TableComponent";


export const TableData: FC = () => {
  const columns = useMemo(() => TableHeaders, []);

  return (
    <TableContainer>
      <TableComponent columns={columns}/>
    </TableContainer>
  );
};
