import { FC } from "react";

interface TableDropdownProps {
    options: Array<string>;
    onClick: Function;
    value: string;
    excludes: Array<string>;
}

export const TableDropdownComponent: FC<TableDropdownProps> = ({
    options,
    onClick = () => { },
    value,
    excludes = []
}) => {
    return (
        <div>

        </div>
    )
}