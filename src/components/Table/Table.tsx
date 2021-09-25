import { FC } from "react";
import { useTable } from "react-table";

// interface Column {
//   Header: string;
//   accessor: string;
//   id: Function | string | number;
// }

interface TableProps {
  columns: Array<any>;
  data: Array<any>;
}

export const Table: FC<TableProps> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
  } = useTable({
    data,
    columns
  });

  return (
    <>
      {allColumns.map((column, index) => (
        <div key={index}>
          <label>
            <input type="radio" {...column.getToggleHiddenProps()} />
            {column.id}
          </label>
        </div>
      ))}
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
            console.log(row);
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
