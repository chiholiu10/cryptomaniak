import { FC, useEffect, useMemo, useRef, useState } from "react";
import { TableContent } from "../../../data/table";
import { Table } from "../Table/Table";
import { TableFilter, TableFilterBlock, TableFilterInput, TableFilterDropdown, TableDropdownList } from "./TableComponent.styles";

interface TableComponentProps {
    columns: Array<any>;
}

export const TableComponent: FC<TableComponentProps> = ({ columns}) => {
    const [columnShow, setColumnShow] = useState<string>("");
    const [openDropdown, setOpenDropdown] = useState(false);
    const wrapperRef = useRef(null);
    const data = useMemo(() => TableContent, []);

    const useOutsideAlerter = (ref: any) => {
        useEffect(() => {
            const handleClickOutside = (event: any) => {
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
        setColumnShow(selectedColumn)
        setOpenDropdown(false)
    }

    const toggleDropdownOpen = () => setOpenDropdown(!openDropdown);

    return (
        <div>
            <TableFilter>
                <TableFilterBlock ref={wrapperRef}>
                    <TableFilterInput 
                    onClick={() => toggleDropdownOpen()}
                    >{columnShow.length > 0 ? columnShow : "Select"}</TableFilterInput>
                    <TableFilterDropdown toggleDropdown={openDropdown}>
                        {columns.slice(1).map((item, index) => (
                            <TableDropdownList key={index}>
                                <div onClick={() => dropdownFilter(item.id)}>
                                    {item.id}
                                </div>
                            </TableDropdownList>
                        ))}
                    </TableFilterDropdown>
                </TableFilterBlock>
            </TableFilter>
            <Table columns={columns} data={data} hiddenColumns={columnShow}/>
        </div>
    )
}