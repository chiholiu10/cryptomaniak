import { FC, useMemo } from "react";
import { Table } from "../Table/Table";
import { TableHeaders } from "../../data/columns";
import { TableContent } from "../../data/table";

export const TableData: FC = () => {
  const columns = useMemo(() => TableHeaders, []);
  const data = useMemo(() => TableContent, [TableContent]);

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
};
