import { FC, useEffect, useRef, useState } from "react";
import { TableFilter, TableFilterBlock, TableFilterInput, TableFilterDropdown, TableDropdownList, TableDropdownOption, TableArrow } from "./TableDropdownFilter.styles";

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
    const [openDropdown, setOpenDropdown] = useState<boolean>(false);
    const wrapperRef = useRef(null);

    type ColumnsType = {
        Header: string;
        id: string;
        accessor: Function;
    }

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
                <TableFilterInput onClick={() => toggleDropdownOpen()} openDropdown={openDropdown}>
                    {columnShow.length > 0 ? columnShow : "Select"}<TableArrow src="images/arrow-grey.png" alt="arrow-icon" /></TableFilterInput>
                <TableFilterDropdown toggleDropdown={openDropdown}>
                    {columns.slice(1).filter((item: ColumnsType) => item.id !== filter).map((item: ColumnsType, index: number) => (
                        <TableDropdownList key={index}>
                            <TableDropdownOption onClick={() => dropdownFilter(item.id)}>
                                {item.id}
                            </TableDropdownOption>
                        </TableDropdownList>
                    ))}
                </TableFilterDropdown>
            </TableFilterBlock>
        </TableFilter>
    )
}