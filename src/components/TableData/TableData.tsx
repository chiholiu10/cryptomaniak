import { FC, useMemo } from "react";
import { TableHeaders } from "../../data/columns";
import { TableContainer } from "./TableData.styles";
import { TableComponent } from "../Table/TableComponent/TableComponent";
import { Header } from "../../styles/GeneralStyles.styles";
import { Breakpoint, Subtitle } from "../Table/Table/Table.styles";


export const TableData: FC = () => {
  const columns = useMemo(() => TableHeaders, []);

  return (
    <TableContainer>
      <Header>All the feature<Breakpoint /> you need</Header>
      <Subtitle>Select plans to compare</Subtitle>
      <TableComponent columns={columns} />
    </TableContainer>
  );
};
