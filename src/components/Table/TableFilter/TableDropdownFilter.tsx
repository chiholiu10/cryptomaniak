import { FC, useEffect, useRef, useState } from "react";
import { TableFilter, TableFilterBlock, TableFilterInput, TableFilterDropdown, TableDropdownList } from "./TableDropdownFilter.styles";

interface TableDropdownProps {
    columns: any;
    onSelect: any;
    filter?: string;
}

export const TableDropdownFilter: FC<TableDropdownProps> = ({
    columns,
    onSelect,
    filter
}) => {
    const [columnShow, setColumnShow] = useState<string>("");
    const [openDropdown, setOpenDropdown] = useState(false);
    const wrapperRef = useRef(null);

    const useOutsideAlerter = (ref: any) => {
        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpenDropdown(false)
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    useOutsideAlerter(wrapperRef)

    const dropdownFilter = (selectedColumn: string) => {
        setColumnShow(selectedColumn);
        setOpenDropdown(false);
        onSelect(selectedColumn);
    }

    const toggleDropdownOpen = () => setOpenDropdown(!openDropdown);

    return (
        <TableFilter>
            <TableFilterBlock ref={wrapperRef}>
                <TableFilterInput onClick={() => toggleDropdownOpen()}>
                    {columnShow.length > 0 ? columnShow : "Select"}</TableFilterInput>
                {typeof columnShow}
                <TableFilterDropdown toggleDropdown={openDropdown}>
                    {columns.slice(1).filter((item: any) => item.id !== filter).map((item: any, index: number) => (

                        <TableDropdownList key={index}>
                            <div onClick={() => dropdownFilter(item.id)}>
                                {item.id}
                            </div>
                        </TableDropdownList>
                    ))}
                </TableFilterDropdown>
            </TableFilterBlock>
        </TableFilter>
    )
}