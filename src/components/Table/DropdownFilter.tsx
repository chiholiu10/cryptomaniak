import { FC } from "react";
interface DropdownFilterProps {
  allColumns: any;
}

export const Dropdown: FC<DropdownFilterProps> = ({ allColumns }) => {
  return (
    <div>
      {allColumns.map((column: any, index: number) => (
        <div key={index}>
          <label>
            <input type="checkbox" {...column.getToggleHiddenProps()} />
            {column.id}
          </label>
        </div>
      ))}
    </div>
  );
};