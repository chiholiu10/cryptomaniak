import { FC, useEffect } from "react";
import { useTable } from "react-table";

// interface Column {
//   Header: string;
//   accessor: string;
//   id: Function | string | number;
//   show: boolean;
// }

interface TableProps {
  columns: Array<any>;
  data: Array<any>;
  hiddenColumnsOne: any;
  hiddenColumnsTwo: any;
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
    columns,
    initialState: {
      hiddenColumns: columns.filter(column => {
        if (column.id !== String(hiddenColumnsOne)) return column;
      })
    }
  });

  let newArray: any = [];
  columns.slice(1).filter(column => {
    if (column.id !== String(hiddenColumnsOne) && (hiddenColumnsOne.length > 0 && hiddenColumnsTwo) && (column.id !== String(hiddenColumnsTwo))) {
      newArray.push(column.id);
    }
  })

  useEffect(() => {


    setHiddenColumns(newArray)
  }, [hiddenColumnsOne, hiddenColumnsTwo])

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};