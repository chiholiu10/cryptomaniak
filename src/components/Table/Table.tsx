import { FC, useState } from "react";
import { useTable } from "react-table";

interface Column {
  Header: string;
  accessor: string;
  id: Function | string | number;
}

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
    columns,
  });
  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("");
  const handleChangeOne = (e: any) => setValueOne(e.target.value);
  const handleChangeTwo = (e: any) => setValueTwo(e.target.value);

  return (
    <>
      <select value={valueOne} onChange={handleChangeOne}>
        {allColumns.map((column) => (
          <option value={column.id} {...column.getToggleHiddenProps()}>
            {column.id}
          </option>
        ))}
      </select>

      <select value={valueTwo} onChange={handleChangeTwo}>
        {allColumns.map((column) => (
          <option value={column.id} {...column.getToggleHiddenProps()}>
            {column.id}
          </option>
        ))}
      </select>

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
