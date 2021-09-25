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
  hiddenColumns: any;
}

export const Table: FC<TableProps> = ({ columns, data, hiddenColumns }) => {
  console.log(hiddenColumns)
  
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
        if(column.id !== String(hiddenColumns)) return column;
      })
    }
  });
  
  useEffect(() => {
    let newArray: any = [];
    columns.slice(1).filter(column => {
      if(column.id !== String(hiddenColumns) && (hiddenColumns.length > 0)) {
        newArray.push(column.id);
      }
    })
    setHiddenColumns(newArray)
  }, [hiddenColumns])

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
