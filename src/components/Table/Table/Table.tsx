import { FC, useEffect } from "react";
import { useTable } from "react-table";
import { TableThead, TableTr, TableContainer, TableTd, TableTbody, TableComponent } from "./Table.styles";

export interface TableProps {
  columns: Array<any>;
  data: Array<any>;
  hiddenColumnsOne: string;
  hiddenColumnsTwo: string;
}

export const Table: FC<TableProps> = ({ columns, data, hiddenColumnsOne, hiddenColumnsTwo }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setHiddenColumns
  } = useTable({
    data,
    columns
  });

  let newArray: Array<string> = [];
  columns.slice(1).filter(column => {
    if (column.id !== String(hiddenColumnsOne) && (hiddenColumnsOne.length > 0 && hiddenColumnsTwo) && (column.id !== String(hiddenColumnsTwo))) {
      return newArray.push(column.id);
    }
    return newArray;
  })

  useEffect(() => {
    setHiddenColumns(newArray);
    // eslint-disable-next-line 
  }, [hiddenColumnsOne, hiddenColumnsTwo])

  return (
    <TableComponent>
      <TableContainer {...getTableProps()}>
        <TableThead>
          {headerGroups.map((headerGroup) => (
            <TableTr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </TableTr>
          ))}
        </TableThead>

        <TableTbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <TableTr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <TableTd {...cell.getCellProps()}>{cell.value === "true" ? <img src="/images/true.png" alt="true-icon" /> : cell.value === "false" ? <img src="/images/false.png" alt="true-icon" /> : cell.value}</TableTd>
                ))}
              </TableTr>
            );
          })}
        </TableTbody>
      </TableContainer>
    </TableComponent>
  );
};
