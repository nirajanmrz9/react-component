
import React from "react";
import { useSortBy, useTable } from "react-table";
import { grk } from "../../helpers";
import styles from "./table.module.scss"
//table data type, dyanmically generated from generic
export type TDData<T> = {
  [Property in keyof T]: T[Property];
};

export type THeadType<T> = {
  h: any;
  accessor: keyof T;
  // islowerText?: boolean;
};

export interface TableProps<T> {
  //table header key
  thData:any;
  //table data
  tdData: any;
}

//Component to create dynamic tables
function DynamicTable<T>(props: TableProps<T>) {
  const { tdData, thData } = props;

  const tableInstance = useTable({ columns: thData, data: tdData }, useSortBy);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  // get table heading data
  const thDataRender = () =>
    headerGroups.map((headerGroup, index) => (
      <React.Fragment key={grk("thtr", index)}>
        <tr className="" {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column, thIndex) => (
            <React.Fragment key={grk("th", thIndex)}>
              <th className=" p-2 text-left" {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("h")}
              </th>
            </React.Fragment>
          ))}
        </tr>
      </React.Fragment>
    ));

  // get table row data
  const tdDataRender = () =>
    rows.map((row, index) => {
      prepareRow(row);

      return (
        <tr className="" {...row.getRowProps()} key={grk("trtd", index)}>
          {row.cells.map((cell, tdIndex) => (
            <td  className=" p-2 text-left" {...cell.getCellProps()} key={grk("td", tdIndex)}>
              {cell.render("Cell")}
            </td>
          ))}
        </tr>
      );
    });

  return (
    <div
 
      className={styles.table_wrapper}
    >
      <table className="w-full table-auto  " style={{color:"var(--black)"}} {...getTableProps()}>
        <thead >{thDataRender()}</thead>
        <tbody {...getTableBodyProps}>
          {tdData?.length > 0 ? (
            tdDataRender()
          ) : (
            <tr>
              <td colSpan={thData?.length} style={{textAlign:"center"}}>
                No Data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
export default DynamicTable;
